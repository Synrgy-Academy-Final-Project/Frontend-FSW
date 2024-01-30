import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const EditForm = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 16px;
  background: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
`;

const Button = styled.button`
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;
`;

const CancelButton = styled(Button)`
  background-color: #CCCCCC;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 16px;
  background: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 2000;
`;

const EditFormBandara = ({ bandara, onUpdate, onEditFormMessage, onClose }) => {
    const [airports, setAirports] = useState([]);
    const [formData, setFormData] = useState({
        fromAirportId: bandara.fromAirportId,
        toAirportId: bandara.toAirportId,
        durationHours: String(Math.floor(bandara.duration / 60)), // Convert to string
        durationMinutes: String(bandara.duration % 60), // Convert to string
        price: bandara.price,
    });

    useEffect(() => {
        async function fetchAirports() {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }

                const response = await fetch(`https://backend-fsw.fly.dev/api/v1/airports`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch airports');
                }

                const jsonData = await response.json();

                if (Array.isArray(jsonData)) {
                    const formattedAirports = jsonData.map((item) => ({
                        value: item.id,
                        label: `${item.city} (${item.code})`, // Fix the property names
                    }));

                    setAirports(formattedAirports);
                    console.log('Fetched airports:', jsonData);
                } else {
                    throw new Error('API response is not an array');
                }
            } catch (err) {
                console.error('Error fetching airports:', err.message);
            }
        }

        fetchAirports();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // const handleSelectChange = (selectedOption) => {
    //     const name = "fromAirportId"; // Specify the name you want here
    //     setFormData({ ...formData, [name]: selectedOption ? selectedOption.value : null });
    // };


    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Convert duration hours and minutes to minutes
        const hours = parseInt(formData.durationHours) || 0;
        const minutes = parseInt(formData.durationMinutes) || 0;
        const durationInMinutes = hours * 60 + minutes;

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }

            const response = await fetch(`https://backend-fsw.fly.dev/api/v1/airports/baseprice/${bandara.id}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fromAirportId: formData.fromAirportId,
                    toAirportId: formData.toAirportId,
                    duration: durationInMinutes,
                    price: formData.price,
                }),
            });

            if (response.status === 201) {
                const jsonData = await response.json();
                onUpdate();
                onEditFormMessage(jsonData.message || 'Data berhasil diperbarui.');
                onClose();
            } else {
                const jsonData = await response.json();
                onEditFormMessage(jsonData.message || 'Error updating data');
                onClose();
            }
        } catch (err) {
            console.error('Error:', err.message);
            onEditFormMessage(err.message);
            onClose();
        }
    };

    const airportOptions = airports.map((airport) => ({
        value: airport.value,
        label: airport.label,
    }));

    const handleCancel = () => {
        onClose();
    };
    const handleOverlayClick = () => {
        onClose();
    };
    const handleFormClick = (e) => {
        e.stopPropagation();
    };

    return (
        <Overlay onClick={handleOverlayClick}>
            <ModalContainer>
                <EditForm onSubmit={handleSubmit} onClick={handleFormClick}>
                    <FormGroup>
                        <Label htmlFor="fromAirportId">Kota/Bandara Asal</Label>
                        <Select
                            id="originAirport"
                            name="fromAirportId"
                            options={airportOptions}
                            onChange={(selectedOption) => setFormData({ ...formData, fromAirportId: selectedOption ? selectedOption.value : null })}
                            value={airportOptions.find((option) => option.value === formData.fromAirportId)}
                            required
                            placeholder="Bandara Asal"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="toAirportId">Kota/Bandara Tujuan</Label>
                        <Select
                            id="destinationAirport"
                            name="toAirportId"
                            options={airportOptions}
                            onChange={(selectedOption) => setFormData({ ...formData, toAirportId: selectedOption ? selectedOption.value : null })}
                            value={airportOptions.find((option) => option.value === formData.toAirportId)}
                            required
                            placeholder="Bandara Tujuan"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="durationHours">Durasi (Jam)</Label>
                        <Input
                            id="durationHours"
                            name="durationHours"
                            type="number"
                            value={formData.durationHours}
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="durationMinutes">Durasi (Menit)</Label>
                        <Input
                            id="durationMinutes"
                            name="durationMinutes"
                            type="number"
                            value={formData.durationMinutes}
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="price">Harga</Label>
                        <Input
                            id="price"
                            name="price"
                            type="number"
                            value={formData.price}
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FlexContainer>
                        <Button type="submit">Simpan</Button>
                        <CancelButton type="button" onClick={handleCancel}>Batal</CancelButton>
                    </FlexContainer>
                </EditForm>
            </ModalContainer>
        </Overlay>
    );
};

export default EditFormBandara;
