import styled from 'styled-components';
import {useEffect, useState} from "react";

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
  background: #FFF;
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
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #666;
  }
`;

const PageNumber = styled.span`
  display: inline-block;
  min-width: 30px;
  text-align: center;
`;

const StatusBadge = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  width: 100px;
  &.sukses {
    background-color: #28a745;
  }

  &.refund {
    background-color: #ffc107;
    color: black;
  }

  &.gagal {
    background-color: #dc3545;
  }

  &.pending {
    background-color: #007bff;
  }

  &.expire {
    background-color: #6c757d;
  }
`;

const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
};

const getStatusClassName = (status) => {
    switch (status.toLowerCase()) {
        case 'settlement':
            return 'sukses';
        case 'refund':
            return 'refund';
        case 'failure':
            return 'gagal';
        case 'pending':
            return 'pending';
        case 'expire':
            return 'expire';
        default:
            return '';
    }
};

const TableTransaksi = () => {
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [sortBy, setSortBy] = useState('newest');


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('Token tidak ditemukan, silakan login kembali.');
            return;
        }

        fetch('https://backend-fsw.fly.dev/api/v1/transactions/report', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (response.ok) return response.json();
                throw response;
            })
            .then(data => {
                setTransactions(data.data);
                console.log(data)
            })
            .catch(error => {
                if (error.status === 401) {
                    setError('Invalid token. Silakan login kembali.');
                } else if (error.status === 403) {
                    window.location.href = '/login-admin';
                    setError('Forbidden. Anda tidak memiliki akses.');
                } else if (error.status === 500) {
                    setError('Internal Server Error. Silakan coba lagi nanti.');
                } else {
                    setError('Terjadi kesalahan saat menghubungi server.');
                }
            });
    }, []);

    const pageCount = Math.ceil(transactions.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const sortedTransactions = transactions.slice().sort((a, b) => {
        const dateA = new Date(a.transaction_time).getTime();
        const dateB = new Date(b.transaction_time).getTime();
        return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });
    const currentTransactions = sortedTransactions.slice(indexOfFirstItem, indexOfLastItem);

    if (error) {
        return <div>Error: {error}</div>;
    }
    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };
    return (
        <TableContainer>
            <select id="sortSelect" value={sortBy} onChange={handleSortChange} className={'mt-1'}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </select>
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
                {currentTransactions.map((transaction, index) => (
                    <tr key={transaction.id}>
                        <Td>{indexOfFirstItem + index + 1}</Td>
                        <Td>{transaction.id}</Td>
                        <Td>{`${transaction.first_name} ${transaction.last_name}`}</Td>
                        <Td>{`${transaction.departure_code} - ${transaction.arrival_code}`}</Td>
                        <Td>{new Date(transaction.transaction_time).toLocaleString('id-ID')}</Td>
                        <Td>{transaction.airline}</Td>
                        <Td>{formatPrice(transaction.total_price)}</Td>
                        <Td><StatusBadge className={getStatusClassName(transaction.transaction_status)}>{transaction.transaction_status}</StatusBadge></Td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <PaginationContainer>
                <KembaliButton onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage <= 1}>{' < Kembali'}</KembaliButton>
                <PageNumber>{currentPage}</PageNumber>
                <SelanjutnyaButton onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage >= pageCount}>{'Selanjutnya > '}</SelanjutnyaButton>
            </PaginationContainer>
        </TableContainer>
    );
};

export default TableTransaksi;