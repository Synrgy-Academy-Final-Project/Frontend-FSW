import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  border-radius: 8px;
`;

const Th = styled.th`
  background-color: #fff;
  padding: 8px;
  border-bottom: 2px solid #f2f2f2;
  &:first-child {
    border-top-left-radius: 8px; 
  }
  &:last-child {
    border-top-right-radius: 8px;
  }
`;

const Td = styled.td`
  padding: 8px;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
  &:first-child {
    border-bottom-left-radius: 8px;
  &:last-child {
    border-bottom-right-radius: 8px; 
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  align-items: center;
  background-color: #fff;
  border-top: 1px solid #f2f2f2;
`;

const PaginationButton = styled.button`
  display: flex;
  min-width: 120px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #3E7BFA;
  box-shadow: 0px 24px 12px 0px rgba(88, 154, 228, 0.04);
  cursor: pointer;
`;

const KembaliButton = styled(PaginationButton)`
  background: #E1E7EE;
  color: #3E7BFA;
  &:hover {
    background-color: #cad4e0;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #666;
  }
`;

const SelanjutnyaButton = styled(PaginationButton)`
  background: #FFF;
  color: #3E7BFA;
  &:hover {
    background-color: #e6f0fd;
  }
`;

const ActionButton = styled.button`
  margin: 0 4px;
  border: none;
  background: none;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const PageNumber = styled.span`
  display: inline-block;
  min-width: 30px;
  text-align: center;
`;

const TableMaskapai = () => {
    return (
        <TableContainer>
            <Table>
                <thead>
                <tr>
                    <Th>No</Th>
                    <Th>Maskapai</Th>
                    <Th>Tipe Pesawat</Th>
                    <Th>Logo</Th>
                    <Th>Kapasitas</Th>
                    <Th>Kelas</Th>
                    <Th>Harga</Th>
                    <Th>Aksi</Th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <Td>1</Td>
                    <Td>Garuda Indonesia</Td>
                    <Td>GT-123</Td>
                    <Td>www.</Td>
                    <Td>393</Td>
                    <Td>Ekonomi</Td>
                    <Td>Rp1.000.000</Td>
                    <Td>
                        <ActionButton title="Edit">
                            <Icon src="https://i.ibb.co/WFKh40T/Pen.png" alt="Edit" />
                        </ActionButton>
                        <ActionButton title="Delete">
                            <Icon src="https://i.ibb.co/phm3fMy/Trash-Alt.png" alt="Delete" />
                        </ActionButton>
                    </Td>
                </tr>
                <tr>
                    <Td>2</Td>
                    <Td>Lion Air</Td>
                    <Td>GT-123</Td>
                    <Td>www.</Td>
                    <Td>360</Td>
                    <Td>Ekonomi</Td>
                    <Td>Rp1.000.000</Td>
                    <Td>
                        <ActionButton title="Edit">
                            <Icon src="https://i.ibb.co/WFKh40T/Pen.png" alt="Edit" />
                        </ActionButton>
                        <ActionButton title="Delete">
                            <Icon src="https://i.ibb.co/phm3fMy/Trash-Alt.png" alt="Delete" />
                        </ActionButton>
                    </Td>
                </tr>
                </tbody>
            </Table>
            <PaginationContainer>
                <KembaliButton disabled>{' < Kembali'}</KembaliButton>
                <PageNumber>1</PageNumber>
                <SelanjutnyaButton>{'Selanjutnya > '}</SelanjutnyaButton>
            </PaginationContainer>
        </TableContainer>
    );
};


export default TableMaskapai;
