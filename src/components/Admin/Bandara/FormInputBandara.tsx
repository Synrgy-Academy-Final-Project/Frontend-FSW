import React from 'react';
import styled from 'styled-components';

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

const Select = styled.select`
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
`;

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

const FormInputBandara = () => {
    return (
        <Form>
            <FormGroup>
                <label htmlFor="originAirport">Kota/Bandara Asal</label>
                <Select id="originAirport" defaultValue="">
                    <option value="" disabled>Pilih Bandara Asal</option>
                    {/* Insert options here */}
                </Select>
            </FormGroup>
            <FormGroup>
                <label htmlFor="destinationAirport">Kota/Bandara Tujuan</label>
                <Select id="destinationAirport" defaultValue="">
                    <option value="" disabled>Pilih Bandara Tujuan</option>
                    {/* Insert options here */}
                </Select>
            </FormGroup>
            <FormGroup>
                <label htmlFor="duration">Durasi</label>
                <Input id="duration" type="text" placeholder="0 j 0 m" />
            </FormGroup>
            <FormGroup>
                <label htmlFor="price">Harga</label>
                <Input id="price" type="text" placeholder="Rp" />
            </FormGroup>
            <Button type="submit">+ Tambah</Button>
        </Form>
    );
};

export default FormInputBandara;
