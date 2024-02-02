import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const EditForm = styled.form`
  width: 97%;
  margin-left: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  background: #FFFFFF;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 150px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  padding-right: 30px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;

const Button = styled.button`
  background-color: #007BFF;
  margin-top: 25px;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const EditFormDetailPesawat = ({ closeModal, airplane }) => {
    const [airlineOptions, setAirlineOptions] = useState([]);
    const [selectedAirline, setSelectedAirline] = useState(null);

    useEffect(() => {
        const fetchAirlines = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found');
                return;
            }

            try {
                const response = await fetch('https://backend-fsw.fly.dev/api/v1/companies', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setAirlineOptions(data.data.map(airline => ({
                    label: airline.name,
                    value: airline.id
                })));
                setSelectedAirline(data.data.find(airline => airline.id === airplane.companyId));
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        };

        fetchAirlines();
    }, [airplane.companyId]);

    const [formData, setFormData] = useState({
        airplaneName: airplane.airplaneName || "",
        airplaneCode: airplane.airplaneCode || "",
        airplanePrice: airplane.airplanePrice || 0,
        url: airplane.url || "",
        companyId: airplane.companyId || "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedData = {
            airplaneName: formData.airplaneName,
            airplaneCode: formData.airplaneCode,
            airplanePrice: formData.airplanePrice,
            url: formData.url,
            companyId: selectedAirline ? selectedAirline.value : "",
        };

        const token = localStorage.getItem('token');
        if (!token) {
            alert('No token found');
            return;
        }

        try {
            console.log('Sending PATCH request with data:', updatedData);
            const response = await fetch(`https://backend-fsw.fly.dev/api/v1/airplanes/${airplane.id}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });

            const data = await response.json();

            if (response.status === 200) {
                console.log('PATCH request successful. Response:', data);
                alert(data.message);
                closeModal();
            } else {
                console.error('PATCH request failed. Response:', data);
                alert(data.message); // Handle errors
            }
        } catch (error) {
            console.error('Error:', error.message);
            alert(error.message);
        }
    };




    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSelectChange = (selectedOption) => {
        setSelectedAirline(selectedOption);
    };

    return (
        <EditForm onSubmit={handleSubmit}>
            <InputGroup>
                <Label>Maskapai</Label>
                <Select
                    value={selectedAirline}
                    onChange={handleSelectChange}
                    options={airlineOptions}
                />
            </InputGroup>
            <InputGroup>
                <Label>URL</Label>
                <Input
                    id="url"
                    name="url"
                    type="text"
                    placeholder="URL"
                    value={formData.url}
                    onChange={handleChange}
                />
            </InputGroup>
            <InputGroup>
                <Label>Kode Pesawat</Label>
                <Input
                    id="airplaneCode"
                    name="airplaneCode"
                    type="text"
                    value={formData.airplaneCode}
                    placeholder="Kode Pesawat"
                    onChange={handleChange}
                />
            </InputGroup>
            <InputGroup>
                <Label>Pesawat</Label>
                <Input
                    id="airplaneName"
                    name="airplaneName"
                    type="text"
                    value={formData.airplaneName}
                    placeholder="Nama Pesawat"
                    onChange={handleChange}
                />
            </InputGroup>
            <InputGroup>
                <Label>Harga</Label>
                <Input
                    id="airplanePrice"
                    name="airplanePrice"
                    type="number"
                    value={formData.airplanePrice}
                    placeholder="Harga"
                    onChange={handleChange}
                />
            </InputGroup>
            <Button type="submit">Simpan</Button>
        </EditForm>
    );
};

export default EditFormDetailPesawat;
