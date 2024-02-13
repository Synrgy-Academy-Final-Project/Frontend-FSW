import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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

const EditFormBandara = ({ bandara, onUpdate, onEditFormMessage, onClose, id }) => {
    const [airports, setAirports] = useState([]);
    const [formData, setFormData] = useState({
        fromAirportId: bandara.fromAirportId,
        toAirportId: bandara.toAirportId,
        durationHours: String(Math.floor(bandara.duration / 60)),
        durationMinutes: String(bandara.duration % 60),
        price: bandara.price,
    });
    const [successMessage, setSuccessMessage] = useState('');

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
                        label: `${item.city} (${item.code})`,
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const hours = parseInt(formData.durationHours) || 0;
        const minutes = parseInt(formData.durationMinutes) || 0;
        const durationInMinutes = hours * 60 + minutes;

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }

            const response = await fetch(`https://backend-fsw.fly.dev/api/v1/airports/baseprice/${id}`, {
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

            const jsonData = await response.json();

            if (!response.ok) {
                throw new Error(jsonData.message || 'Failed to update data');
            }

            onUpdate();
            setSuccessMessage('Data berhasil diperbarui.');
            onEditFormMessage('Data berhasil diperbarui.');
            onClose();
        } catch (err) {
            console.error('Error updating data:', err.message);
            onEditFormMessage('Gagal memperbarui data. Silakan coba lagi.');
        }
    };

    const handleCancel = () => {
        onClose();
    };

    return (
        <Overlay>
            <ModalContainer>
                <EditForm onSubmit={handleSubmit}>
                    <h2>Edit Bandara</h2>
                    <FormGroup>
                        <Label>Bandara Asal</Label>
                        <Select
                            options={airports}
                            value={airports.find((option) => option.value === formData.fromAirportId)}
                            onChange={(selectedOption) => setFormData({ ...formData, fromAirportId: selectedOption.value })}
                            isClearable
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Bandara Tujuan</Label>
                        <Select
                            options={airports}
                            value={airports.find((option) => option.value === formData.toAirportId)}
                            onChange={(selectedOption) => setFormData({ ...formData, toAirportId: selectedOption.value })}
                            isClearable
                        />
                    </FormGroup>
                    <FlexContainer>
                        <FormGroup style={{ flex: '1', marginRight: '8px' }}>
                            <Label>Durasi (jam)</Label>
                            <Input
                                type="number"
                                name="durationHours"
                                value={formData.durationHours}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup style={{ flex: '1', marginLeft: '8px' }}>
                            <Label>Durasi (menit)</Label>
                            <Input
                                type="number"
                                name="durationMinutes"
                                value={formData.durationMinutes}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                    </FlexContainer>
                    <FormGroup>
                        <Label>Harga</Label>
                        <Input
                            type="number"
                            name="price"
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

EditFormBandara.propTypes = {
    bandara: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onEditFormMessage: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    id: PropTypes.any.isRequired,
};

export default EditFormBandara;