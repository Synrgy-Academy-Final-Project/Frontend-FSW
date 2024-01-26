import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { useCurrentPage } from "../CurrentPageContext.tsx";

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

const EditFormTanggal = ({ dateId, initialData, onClose,  onUpdateSuccess, updateMessage  }) => {
    const [apiMessage, setApiMessage] = useState('');


    const dayCategoryOptions = [
        { value: 'Hari Biasa', label: 'Hari Biasa' },
        { value: 'Hari Libur', label: 'Hari Libur' }
    ];

    const { setRefreshData } = useCurrentPage();
    const [formData, setFormData] = useState(initialData);
    const [error, setError] = useState('');

    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCategoryChange = (selectedOption) => {
        setFormData({ ...formData, dayCategory: selectedOption.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }

            // Format the dateOfDeparture in "yyyy-MM-dd" format
            const formattedDate = new Date(formData.dateOfDeparture).toISOString().split('T')[0];

            const payload = {
                dateOfDeparture: formattedDate, // Use the formatted date
                dayCategory: formData.dayCategory,
                price: parseInt(formData.price),
            };

            const response = await fetch(`https://backend-fsw.fly.dev/api/v1/dates/baseprice/${dateId}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            console.log('Response:', response); // Add this line to log the response

            if (response.status === 200) {
                const jsonData = await response.json();
                onUpdateSuccess();
                updateMessage('Data berhasil diperbarui.');
                setApiMessage('Data berhasil diperbarui.'); // Atur pesan dari API
                setRefreshData(true);
                onClose();
                setTimeout(() => {
                    setApiMessage('');
                }, 3000);
            } else {
                const jsonData = await response.json();
                console.error('Error updating data:', jsonData); // Log errors
                updateMessage(jsonData.message || 'Error updating data');
                setApiMessage(jsonData.message || 'Error updating data'); // Atur pesan dari API
                onUpdateSuccess();
                setTimeout(() => {
                    setApiMessage('');
                }, 3000);
            }
        } catch (error) {
            console.error('Error updating data:', error);
            setError(error.message);
            setApiMessage(error.message); // Atur pesan dari API
            onUpdateSuccess();
            setTimeout(() => {
                setApiMessage('');
            }, 3000);
        }
    };




    return (
        <EditForm onSubmit={handleSubmit}>
            <InputGroup>
                <Label>Tanggal Keberangkatan</Label>
                <Input
                    type="date"
                    name="dateOfDeparture"
                    value={formData.dateOfDeparture}
                    onChange={handleInputChange}
                />
            </InputGroup>
            <InputGroup>
                <Label>Kategori Hari</Label>
                <Select
                    options={dayCategoryOptions}
                    value={dayCategoryOptions.find(option => option.value === formData.dayCategory)}
                    onChange={handleCategoryChange}
                    isSearchable={false}
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
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {apiMessage && <p style={{ color: 'green' }}>{apiMessage}</p>}
            <Button type="submit">Simpan</Button>
        </EditForm>
    );
};

export default EditFormTanggal;
