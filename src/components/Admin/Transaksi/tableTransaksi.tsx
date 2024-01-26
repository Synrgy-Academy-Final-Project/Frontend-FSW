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
  }
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

const StatusBadge = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  text-align: center;
  width: 100px;

  &.sukses {
    background-color: #28a745;
  }

  &.refund {
    background-color: #ffc107;
    color: black; // For better contrast
  }

  &.gagal {
    background-color: #dc3545;
  }
`;

const TableTransaksi = () => {
    return (
        <TableContainer>
            <Table>
                <thead>
                <tr>
                    <Th>No</Th>
                    <Th>ID Booking</Th>
                    <Th>Penumpang</Th>
                    <Th>Perjalanan</Th>
                    <Th>Tanggal</Th>
                    <Th>Maskapai</Th>
                    <Th>Harga</Th>
                    <Th>Status</Th>
                </tr>
                </thead>
                <tbody>
                {/* Example rows */}
                <tr>
                    <Td>1</Td>
                    <Td>123456</Td>
                    <Td>Ariella Lia Lie</Td>
                    <Td>JKT - DPS</Td>
                    <Td>24/02/2024 06:00 AM</Td>
                    <Td>Garuda Indonesia Ekonomi</Td>
                    <Td>Rp1.000.000</Td>
                    <Td><StatusBadge className="sukses">Sukses</StatusBadge></Td>
                </tr>
                <tr>
                    <Td>2</Td>
                    <Td>123451</Td>
                    <Td>Alia Lia Lie</Td>
                    <Td>JKT - DPS</Td>
                    <Td>24/02/2024 06:00 AM</Td>
                    <Td>Garuda Indonesia Ekonomi</Td>
                    <Td>Rp1.000.000</Td>
                    <Td><StatusBadge className="refund">Refund</StatusBadge></Td>
                </tr>
                <tr>
                    <Td>3</Td>
                    <Td>123452</Td>
                    <Td>Anita Lia Lie</Td>
                    <Td>JKT - DPS</Td>
                    <Td>24/02/2024 06:00 AM</Td>
                    <Td>Garuda Indonesia Ekonomi</Td>
                    <Td>Rp1.000.000</Td>
                    <Td><StatusBadge className="gagal">Gagal</StatusBadge></Td>
                </tr>
                {/* Additional rows would be dynamically generated here */}
                </tbody>
            </Table>
            <PaginationContainer>
                <KembaliButton>{' < Kembali'}</KembaliButton>
                <PageNumber>1</PageNumber>
                <SelanjutnyaButton>{'Selanjutnya > '}</SelanjutnyaButton>
            </PaginationContainer>
        </TableContainer>
    );
};

export default TableTransaksi;
