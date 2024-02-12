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

const classOptions = [
    { value: 'Ekonomi', label: 'Ekonomi' },
    { value: 'Bisnis', label: 'Bisnis' },
    { value: 'Kelas Utama', label: 'Kelas Utama' },
];

const EditFormClass = ({ airplaneClassData, closeModal,onRefresh  }) => {
    const [formData, setFormData] = useState({
        airplaneClassName: airplaneClassData.airplaneClassName || "",
        airplaneClassPrice: airplaneClassData.airplaneClassPrice || 0,
        capacity: airplaneClassData.capacity || 0,
    });

    useEffect(() => {
        setFormData({
            airplaneClassName: airplaneClassData.airplaneClassName || "",
            airplaneClassPrice: airplaneClassData.airplaneClassPrice || 0,
            capacity: airplaneClassData.capacity || 0,
        });
    }, [airplaneClassData]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSelectChange = (selectedOption) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            airplaneClassName: selectedOption ? selectedOption.value : '',
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedData = {
            ...formData,
            airplaneId: airplaneClassData.airplaneId,
        };

        const token = localStorage.getItem('token');
        if (!token) {
            alert('No token found');
            return;
        }

        try {
            const response = await fetch(
                `https://backend-fsw.fly.dev/api/v1/classes/airplane/${airplaneClassData.id}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedData),
                }
            );

            const data = await response.json();

            if (response.status === 200) {
                console.log('PATCH request successful. Response:', data);
                alert(data.message);
                closeModal();
                onRefresh();
            } else {
                console.error('PATCH request failed. Response:', data);
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error.message);
            alert(error.message);
        }
    };

    return (
        <EditForm onSubmit={handleSubmit}>
            <InputGroup>
                <Label>Nama Kelas</Label>
                <Select
                    id="airplaneClassName"
                    name="airplaneClassName"
                    value={classOptions.find(option => option.value === formData.airplaneClassName)}
                    onChange={handleSelectChange}
                    options={classOptions}
                    isClearable
                    isSearchable
                />
            </InputGroup>
            <InputGroup>
                <Label>Kapasitas</Label>
                <Input
                    id="capacity"
                    name="capacity"
                    type="number"
                    value={formData.capacity}
                    placeholder="Kapasitas"
                    onChange={handleChange}
                    required
                />
            </InputGroup>
            <InputGroup>
                <Label>Harga Kelas</Label>
                <Input
                    id="airplaneClassPrice"
                    name="airplaneClassPrice"
                    type="number"
                    value={formData.airplaneClassPrice}
                    placeholder="Harga Kelas"
                    onChange={handleChange}
                    required
                />
            </InputGroup>
            <Button type="submit">Simpan</Button>
        </EditForm>
    );
};

export default EditFormClass;
