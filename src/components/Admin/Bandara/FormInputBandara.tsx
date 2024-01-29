import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useCurrentPage} from "../CurrentPageContext.tsx";
import Select from 'react-select';

const Form = styled.form`
  width: 97%;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 8px;

  & > label {
    margin-bottom: 4px;
    font-size: 14px;
  }
`;

// const Select = styled.select`
//   border: 1px solid #CCCCCC;
//   border-radius: 4px;
//   padding: 8px;
//   font-size: 14px;
//   cursor: pointer;
// `;

const Input = styled.input`
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  padding: 8px;
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
const ResponseMessage = styled.div`
  padding: 8px;
  border-radius: 4px;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
`;
const FormInputBandara = () => {
    const [formData, setFormData] = useState({
        fromAirportId: '',
        toAirportId: '',
        duration: '',
        price: '',
    });

    const [airports, setAirports] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true);
    const { setRefreshData } = useCurrentPage();
    const [responseMessage, setResponseMessage] = useState('');
    const [durationHours, setDurationHours] = useState('');
    const [durationMinutes, setDurationMinutes] = useState('');
    const totalDurationInMinutes = parseInt(durationHours) * 60 + parseInt(durationMinutes);
    const [refreshing, setRefreshing] = useState(false);
    const [isResponseVisible, setIsResponseVisible] = useState(true);
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);

    const handleRefreshClick = () => {
        setRefreshing(true);

        window.location.reload();
    };

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
                        id: item.id,
                        fromCity: item.city,
                        fromCode: item.code,
                    }));

                    setAirports(formattedAirports);
                    console.log('Fetched airports:', jsonData);
                    setLoading(false);
                } else {
                    throw new Error('API response is not an array');
                }
            } catch (err) {
                console.error('Error fetching airports:', err.message);
            }
        }

        fetchAirports();
    }, []);
    const airportOptions = airports.map(airport => ({
        value: airport.id,
        label: `${airport.fromCity} (${airport.fromCode})`
    }));
    const handleSelectChange = (selectedOption, action) => {
        setFormData({ ...formData, [action.name]: selectedOption.value });
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }

            const dataToSend = {
                fromAirportId: formData.fromAirportId,
                toAirportId: formData.toAirportId,
                duration: totalDurationInMinutes,
                price: parseInt(formData.price),
            };

            const response = await fetch(`https://backend-fsw.fly.dev/api/v1/airports/baseprice`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            const jsonData = await response.json();

            if (response.status === 201) {
                setResponseMessage('Data berhasil ditambahkan.');
                setRefreshData(true);
            } else {
                setResponseMessage(jsonData.message || `Unexpected status code: ${response.status}`);
            }
            setIsNotificationVisible(true);
            setTimeout(() => {
                setIsNotificationVisible(false);
            }, 3000);
        } catch (err) {
            console.error('Error:', err.message);
            setResponseMessage(err.message);
        }
    };

    const getResponseBackgroundColor = () => {
        if (responseMessage.includes('Data berhasil ditambahkan.')) {
            return 'green';
        } else {
            return 'red';
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <label htmlFor="originAirport">Kota/Bandara Asal</label>
                    <Select
                        id="originAirport"
                        name="fromAirportId"
                        options={airportOptions}
                        onChange={handleSelectChange}
                        required
                        isLoading={loading}
                        isDisabled={loading}
                        placeholder="Bandara Asal"
                    />


                </FormGroup>
                <FormGroup>
                    <label htmlFor="destinationAirport">Kota/Bandara Tujuan</label>
                    <Select
                        id="destinationAirport"
                        name="toAirportId"
                        options={airportOptions}
                        onChange={handleSelectChange}
                        required
                        isLoading={loading}
                        isDisabled={loading}
                        placeholder="Bandara Tujuan"
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="durationHours">Durasi Jam</label>
                    <Input
                        id="durationHours"
                        name="durationHours"
                        type="number"
                        placeholder="Jam"
                        value={durationHours}
                        onChange={(e) => setDurationHours(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="durationMinutes">Durasi Menit</label>
                    <Input
                        id="durationMinutes"
                        name="durationMinutes"
                        type="number"
                        placeholder="Menit"
                        value={durationMinutes}
                        onChange={(e) => setDurationMinutes(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="price">Harga</label>
                    <Input
                        id="price"
                        name="price"
                        type="number"
                        placeholder="Rp"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                    />
                </FormGroup>
                <Button type="submit">+ Tambah</Button>
            </Form>
            {isNotificationVisible && (
                <ResponseMessage
                    style={{
                        margin:'15px',
                        backgroundColor: getResponseBackgroundColor(),
                        color: 'white',
                    }}
                >
                    {responseMessage}
                </ResponseMessage>
            )}
        </div>
    );
};

export default FormInputBandara;
