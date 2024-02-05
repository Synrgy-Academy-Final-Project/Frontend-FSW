import { useState } from 'react';
import styled from 'styled-components';

// Styled components
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

interface EditFormScheduleProps {
    flightData: {
        id: number;
        airplaneId: number;
        flightTime: string;
        airplaneFlightTimePrice: number;
    };
    closeModal: () => void;
    refreshData: () => void;
}

// EditFormSchedule component
const EditFormSchedule: React.FC<EditFormScheduleProps> = ({ flightData, closeModal, refreshData }) => {

    const [formData, setFormData] = useState({
        flightTime: flightData.flightTime || '',
        airplaneFlightTimePrice: flightData.airplaneFlightTimePrice || 0
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: name === 'airplaneFlightTimePrice' ? parseInt(value, 10) : value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            alert('No token found');
            return;
        }

        try {
            const response = await fetch(
                `https://backend-fsw.fly.dev/api/v1/flightimes/airplane/${flightData.id}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        airplaneId: flightData.airplaneId,
                        flightTime: formData.flightTime,
                        airplaneFlightTimePrice: formData.airplaneFlightTimePrice
                    })
                }
            );

            const data = await response.json();
            if (response.status === 200) {
                alert(data.message);
                closeModal(); // Close the modal on success
                refreshData(); // Refresh data after editing
            } else {
                alert(data.message); // Show error message
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while updating the flight schedule.');
        }
    };

    return (
        <EditForm onSubmit={handleSubmit}>
            <InputGroup>
                <Label>Flight Time</Label>
                <Input
                    id="flightTime"
                    name="flightTime"
                    type="text"
                    value={formData.flightTime}
                    onChange={handleChange}
                    required
                />
            </InputGroup>
            <InputGroup>
                <Label>Price</Label>
                <Input
                    id="airplaneFlightTimePrice"
                    name="airplaneFlightTimePrice"
                    type="number"
                    value={formData.airplaneFlightTimePrice}
                    onChange={handleChange}
                    required
                />
            </InputGroup>
            <Button type="submit">Save Changes</Button>
        </EditForm>
    );
};

export default EditFormSchedule;
