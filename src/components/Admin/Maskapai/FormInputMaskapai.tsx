import React from 'react';
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


const FormInputMaskapai = () => {
    return (
        <Form>
            <InputGroup>
                <Label>Maskapai</Label>
                <Select>
                    <option>Pilih Maskapai</option>
                </Select>
            </InputGroup>
            <InputGroup>
                <Label>Tipe Pesawat</Label>
                <Input type="text" placeholder="Tipe" />
            </InputGroup>
            <InputGroup>
                <Label>Logo</Label>
                <Input type="text" placeholder="url" />
            </InputGroup>
            <InputGroup>
                <Label>Kapasitas</Label>
                <Input type="number" placeholder="Jumlah seat" />
            </InputGroup>
            <InputGroup>
                <Label>Kelas</Label>
                <Select>
                    <option>Ekonomi</option>
                    <option>Bisnis</option>
                    <option>Kelas Utama</option>
                </Select>
            </InputGroup>
            <InputGroup>
                <Label>Harga</Label>
                <Input type="number" placeholder="Rp" />
            </InputGroup>
            <ButtonContainer>
                <Button type="submit">
                    Tambah
                </Button>
            </ButtonContainer>
        </Form>
    );
};

export default FormInputMaskapai;
