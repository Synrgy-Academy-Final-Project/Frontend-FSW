import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const Form = styled.form`
  width: 97%;
  margin-left: 15px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr); // 3 columns
  gap: 16px;
  background: #FFFFFF;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #3E7BFA;
  color: white;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://i.ibb.co/qDj4NNC/Plus.png');
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 20px;
  text-indent: 20px;

  &:hover {
    background-color: #2a5db0;
  }
`;
const ResponseMessage = styled.div`
  padding: 8px;
  border-radius: 4px;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
`;

const FormInputMaskapai = ({ onRefreshData }) => {
    const [airlineOptions, setAirlineOptions] = useState([]);
    const [selectedAirline, setSelectedAirline] = useState(null);
    const [apiResponseMessage, setApiResponseMessage] = useState({
        message: null,
        isError: false,
    });
    const [formData, setFormData] = useState({
        airplaneName: "",
        airplaneCode: "",
        airplanePrice: 0,
        url: ""
    });

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
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        };

        fetchAirlines();
    }, []);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (selectedOption) => {
        setSelectedAirline(selectedOption);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const postData = {
            airplaneName: formData.airplaneName,
            airplaneCode: formData.airplaneCode,
            airplanePrice: formData.airplanePrice,
            companyId: selectedAirline ? selectedAirline.value : ''
        };

        const token = localStorage.getItem('token');
        if (!token) {
            alert('No token found');
            return;
        }

        try {
            const response = await fetch('https://backend-fsw.fly.dev/api/v1/airplanes', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            const responseData = await response.json();

            if (response.status === 201) {
                setApiResponseMessage({
                    message: responseData.message,
                    isError: false,
                });

                setTimeout(() => {
                    setApiResponseMessage({
                        message: null,
                        isError: false,
                    });
                }, 3000);
                onRefreshData();

            } else {
                setApiResponseMessage({
                    message: responseData.message,
                    isError: true,
                });

                setTimeout(() => {
                    setApiResponseMessage({
                        message: null,
                        isError: false,
                    });
                }, 3000);
            }
        } catch (error) {
            console.error('Error:', error);
            setApiResponseMessage({
                message: 'Internal Server Error',
                isError: true,
            });

            setTimeout(() => {
                setApiResponseMessage({
                    message: null,
                    isError: false,
                });
            }, 3000);
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <Label>Maskapai</Label>
                    <Select
                        value={selectedAirline}
                        onChange={handleSelectChange}
                        options={airlineOptions}
                        getOptionLabel={option => option.label}  // Display name
                        getOptionValue={option => option.value}  // Use ID
                    />
                </InputGroup>
                <InputGroup>
                    <Label>Kode Pesawat</Label>
                    <Input
                        name="airplaneCode"
                        type="text"
                        placeholder="Kode Pesawat"
                        value={formData.airplaneCode}
                        onChange={handleInputChange}
                    />
                </InputGroup>
                <InputGroup>
                    <Label>Pesawat</Label>
                    <Input
                        name="airplaneName"
                        type="text"
                        placeholder="Nama Pesawat"
                        value={formData.airplaneName}
                        onChange={handleInputChange}
                    />
                </InputGroup>
                <InputGroup>
                    <Label>Harga</Label>
                    <Input
                        name="airplanePrice"
                        type="number"
                        placeholder="Harga"
                        value={formData.airplanePrice}
                        onChange={handleInputChange}
                    />
                </InputGroup>
                <ButtonContainer>
                    <Button type="submit">
                        Tambah
                    </Button>
                </ButtonContainer>
            </Form>
            {apiResponseMessage.message && (
                <ResponseMessage style={{ backgroundColor: apiResponseMessage.isError ? 'red' : 'green',color: 'white',margin: '15px' }}>
                    {apiResponseMessage.message}
                </ResponseMessage>
            )}
        </>
    );

};

export default FormInputMaskapai;
