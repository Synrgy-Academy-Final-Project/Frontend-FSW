import{ useState } from 'react';
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


const TimeInput = styled.input.attrs({ type: 'time', step: 1 })`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;

const FormInputSchedule = ({airplaneId,onAddSuccess }) => {
    // const [flightTime, setFlightTime] = useState('');
    const [airplaneFlightTimePrice, setAirplaneFlightTimePrice] = useState('');
    const [flightTime, setFlightTime] = useState('00:00:00');

    const handleSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
            alert('No token found');
            return;
        }

        const requestData = {
            airplaneId,
            flightTime,
            airplaneFlightTimePrice: parseInt(airplaneFlightTimePrice, 10),
        };

        console.log('Request Data:', requestData);

        fetch('https://backend-fsw.fly.dev/api/v1/flightimes/airplane', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(requestData)
        })
            .then(response => {
                if (response.status === 201) {
                    return response.json();
                } else if (response.status === 401) {
                    throw new Error('Invalid Token');
                } else if (response.status === 409) {
                    return response.json();
                } else if (response.status === 500) {
                    throw new Error('Internal Server Error');
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(data => {
                if (data.status === 201) {
                    console.log('Success:', data);
                    alert( data.message);
                    onAddSuccess();
                } else {
                    console.error('Error:', data.message);
                    alert(data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert(error.message);
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Label>Waktu Terbang (HH:mm:ss)</Label>
                <TimeInput
                    value={flightTime}
                    onChange={(e) => setFlightTime(e.target.value)}
                    placeholder="HH:mm:ss"
                />

            </InputGroup>
            <InputGroup>
                <Label>Harga</Label>
                <Input
                    type="number"
                    placeholder="Rp"
                    value={airplaneFlightTimePrice}
                    onChange={(e) => setAirplaneFlightTimePrice(e.target.value)}
                />
            </InputGroup>
            <ButtonContainer>
                <Button type="submit">
                    Tambah
                </Button>
            </ButtonContainer>
        </Form>
    );
};

export default FormInputSchedule;
