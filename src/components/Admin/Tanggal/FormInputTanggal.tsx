import React from 'react';
import styled from 'styled-components';

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

const Select = styled.select`
  padding: 10px;
  padding-right: 30px; 
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  background: white url('https://i.ibb.co/brG0Rbk/Chevron-Down.png') no-repeat right 10px center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
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
const DateInput = styled(Input)`
  background-image: url('https://i.ibb.co/7Yc53SF/Calendar-Alt-1.png');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px 20px;
  -webkit-appearance: none; /* Removes the default icon in WebKit browsers */
  -moz-appearance: none; /* Removes the default icon in Firefox */
  appearance: none; /* Removes the default icon in standard browsers */
`;


const FormInputTanggal = () => {
    return (
        <Form>
            <InputGroup>
                <Label>Tanggal Keberangkatan</Label>
                <DateInput type="text" placeholder="DD/MM/YY" /> {/* Change to 'text' type if using custom icon */}
            </InputGroup>
            <InputGroup>
                <Label>Kategori Hari</Label>
                <Select>
                    <option>Hari Biasa</option>
                    <option>Libur</option>
                </Select>
            </InputGroup>
            <InputGroup>
                <Label>Harga</Label>
                <Input type="number" placeholder="Rp" />
            </InputGroup>
            <Button type="submit">+ Tambah</Button>
        </Form>
    );
};

export default FormInputTanggal;
