import {useState} from 'react';
import styled from 'styled-components';

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

const Select = styled.select`
  padding: 10px;
  padding-right: 30px; /* Make padding larger on the right to accommodate the icon */
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  background: white url('https://i.ibb.co/brG0Rbk/Chevron-Down.png') no-repeat right 10px center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;


  &::-ms-expand {
    display: none; /
  }
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


const FormInputClass = ({airplaneId }) => {
    const [airplaneClassName, setAirplaneClassName] = useState('');
    const [airplaneClassPrice, setAirplaneClassPrice] = useState('');
    const [capacity, setCapacity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
            alert('No token found');
            return;
        }

        fetch('https://backend-fsw.fly.dev/api/v1/classes/airplane', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                airplaneId,
                airplaneClassName,
                airplaneClassPrice: parseInt(airplaneClassPrice, 10),
                capacity: parseInt(capacity, 10)
            })
        })
            .then(response => {
                if (response.status === 201) {
                    return response.json();
                } else if (response.status === 401) {
                    throw new Error('Invalid Token');
                } else if (response.status === 500) {
                    throw new Error('Internal Server Error');
                } else {
                    throw new Error('Class Airplane is already exist with this airplaneId');
                }
            })
            .then(data => {
                console.log('Success:', data);
                alert('Class added successfully');
            })
            .catch(error => {
                console.error('Error:', error);
                alert(error.message);
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Label>Kelas Pesawat</Label>
                <Select onChange={(e) => setAirplaneClassName(e.target.value)}>
                    <option value="Ekonomi">Ekonomi</option>
                    <option value="Bisnis">Bisnis</option>
                    <option value="Kelas Utama">Kelas Utama</option>
                </Select>
            </InputGroup>
            <InputGroup>
                <Label>Kapasitas</Label>
                <Input type="number" placeholder="Jumlah" onChange={(e) => setCapacity(e.target.value)} />
            </InputGroup>
            <InputGroup>
                <Label>Harga</Label>
                <Input type="number" placeholder="Rp" onChange={(e) => setAirplaneClassPrice(e.target.value)} />
            </InputGroup>
            <ButtonContainer>
                <Button type="submit">
                    Tambah
                </Button>
            </ButtonContainer>
        </Form>
    );
};

export default FormInputClass;
