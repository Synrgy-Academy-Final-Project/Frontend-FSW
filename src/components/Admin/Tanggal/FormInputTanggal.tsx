import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCurrentPage } from "../CurrentPageContext.tsx";
import Select from 'react-select';

const Form = styled.form`
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

const DateInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
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

const FormInputTanggal = () => {
    const dayCategoryOptions = [
        { value: 'Hari Biasa', label: 'Hari Biasa' },
        { value: 'Hari Libur', label: 'Hari Libur' }
    ];
    const handleSelectChange = (selectedOption) => {
        setFormData({ ...formData, dayCategory: selectedOption.value });
    };
    const { setRefreshData } = useCurrentPage();
    const [formData, setFormData] = useState({
        dateOfDeparture: '',
        dayCategory: 'Hari Biasa',
        price: '0', // Ubah ke string
    });
    const [notification, setNotification] = useState({
        message: '',
        type: '',
    });

    useEffect(() => {
        if (notification.message) {
            const timeoutId = setTimeout(() => {
                setNotification({ message: '', type: '' });
            }, 3000);

            return () => clearTimeout(timeoutId);
        }
    }, [notification]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }

            const payload = {
                dateOfDeparture: formData.dateOfDeparture,
                dayCategory: formData.dayCategory,
                price: parseInt(formData.price),
            };

            const response = await fetch('https://backend-fsw.fly.dev/api/v1/dates/baseprice', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.status === 201) {
                setFormData({
                    dateOfDeparture: '',
                    dayCategory: 'Hari Biasa',
                    price: '0', // Ubah ke string
                });
                setRefreshData(true);
                setNotification({ message: 'Data berhasil ditambahkan.', type: 'success' });
            } else if (!response.ok) {
                throw new Error('Failed to add data');
            }
        } catch (error) {
            console.error('Error adding data:', error);
            setNotification({ message: error.message, type: 'error' });
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <Label>Tanggal Keberangkatan</Label>
                    <DateInput
                        type="date"
                        name="dateOfDeparture"
                        value={formData.dateOfDeparture}
                        onChange={handleInputChange}
                    />
                </InputGroup>
                <InputGroup>
                    <Label>Kategori Hari</Label>
                    <Select
                        value={dayCategoryOptions.find(option => option.value === formData.dayCategory)}
                        onChange={handleSelectChange}
                        options={dayCategoryOptions}
                    />
                </InputGroup>
                <InputGroup>
                    <Label>Harga</Label>
                    <Input
                        id="price"
                        name="price"
                        type="number"
                        placeholder="Rp"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                    />
                </InputGroup>
                <Button type="submit">+ Tambah</Button>
            </Form>
            {notification.message && (
                <ResponseMessage
                    style={{
                        margin: '15px',
                        backgroundColor: notification.type === 'success' ? 'green' : 'red',
                        color: 'white',
                    }}
                >
                    {notification.message}
                </ResponseMessage>
            )}
        </>
    );
};

export default FormInputTanggal;
