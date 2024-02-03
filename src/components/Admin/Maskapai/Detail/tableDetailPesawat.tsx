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


const TableDetailPesawat = ({airplaneDetails }) => {
    return (
        <TableContainer>
            <Table>
                <thead>
                <tr>
                    <Th>No</Th>
                    <Th>Nama Pesawat</Th>
                    <Th>Kode Pesawat</Th>
                    <Th>Harga</Th>
                </tr>
                </thead>
                <tbody>
                {airplaneDetails && (
                    <tr>
                        <Td>{1}</Td>
                        <Td>{airplaneDetails.airplaneName}</Td>
                        <Td>{airplaneDetails.airplaneCode}</Td>
                        <Td>{`Rp${airplaneDetails.airplanePrice.toLocaleString()}`}</Td>
                    </tr>
                )}


                </tbody>
            </Table>
            <PaginationContainer></PaginationContainer>
        </TableContainer>
    );
};


export default TableDetailPesawat;
