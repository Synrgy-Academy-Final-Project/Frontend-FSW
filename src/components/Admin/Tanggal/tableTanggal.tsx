import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useCurrentPage } from '../CurrentPageContext.tsx';
import EditFormTanggal from './EditFormTanggal.tsx';

const EditButton = styled.button`
  margin: 0 4px;
  border: none;
  background: none;
  cursor: pointer;
`;

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
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
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
  border: 1px solid #3e7bfa;
  box-shadow: 0px 24px 12px 0px rgba(88, 154, 228, 0.04);
  cursor: pointer;
`;

const KembaliButton = styled(PaginationButton)`
  background: #fff;
  color: #3e7bfa;
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
  background: #fff;
  color: #3e7bfa;
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

const ResponseMessage = styled.div`
  padding: 8px;
  border-radius: 4px;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
`;

const Overlay = styled.div<{ show: boolean }>` // Menggunakan tipe generik langsung
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContainer = styled.div<{ show: boolean }>` // Menggunakan tipe generik langsung
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 45%;
  left: 55%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1001;
`;

const TableTanggal = () => {
    const [dates, setDates] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10);
    const { refreshData, setRefreshData } = useCurrentPage();


    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, dates.length);

    const [isNotificationVisible, setIsNotificationVisible] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    // update
    const [editingDateId, setEditingDateId] = useState(null);
    const [apiMessage, setApiMessage] = useState('');
    const [patchMessage, setPatchMessage] = useState('');

    // ...
    const [editFormMessage, setEditFormMessage] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const sortDates = (data) => {
        const sortedData = [...data];
        sortedData.sort((a, b) => {
            const dateA = new Date(a.updatedDate).getTime();
            const dateB = new Date(b.updatedDate).getTime();
            if (sortBy === 'newest') {
                return dateB - dateA; // Sort by newest
            } else {
                return dateA - dateB; // Sort by oldest
            }
        });
        return sortedData;
    };
    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const hideMessageAfterTimeout = () => {
        setTimeout(() => {
            setSuccessMessage('');
            setPatchMessage('');
        }, 3000);
    };

    const handleEditClick = (dateId) => {
        setEditingDateId(dateId);
        setPatchMessage('');
        setApiMessage('');
    };

    const handleCancelEdit = () => {
        setEditingDateId(null);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }

                const response = await fetch('https://backend-fsw.fly.dev/api/v1/dates/baseprice', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 403) {
                    window.location.href = '/login-admin';
                    return;
                }

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const jsonData = await response.json();
                setDates(jsonData.data);
                console.log(jsonData.data);
                setRefreshData(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            if (successMessage || patchMessage) {
                setIsNotificationVisible(true);
                hideMessageAfterTimeout();
            }
        };

        fetchData();
    }, [refreshData, setRefreshData, successMessage, patchMessage]);


    const handlePreviousClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}/${month}/${year}`;
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Yakin mau hapus data ini?');
        if (!confirmDelete) {
            return;
        }

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }

            const response = await fetch(`https://backend-fsw.fly.dev/api/v1/dates/baseprice/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                setSuccessMessage('Data berhasil dihapus.');
                setIsNotificationVisible(true);
                setRefreshData(true);
            } else {
                const jsonData = await response.json();
                setSuccessMessage(jsonData.message || 'Error deleting data');
                setIsNotificationVisible(true);
            }
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    const getResponseBackgroundColor = () => {
        if (successMessage.includes('Data berhasil dihapus.')) {
            return 'green';
        } else if (apiMessage.includes('Data berhasil diperbarui.')) {
            return 'green';
        } else if (editFormMessage.includes('Data berhasil diperbarui.')) {
            return 'green';
        } else {
            return 'red';
        }
    };
    const hideEditFormMessageAfterTimeout = () => {
        setTimeout(() => {
            setEditFormMessage('');
        }, 3000);
    };
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredDates = dates.filter((date) =>
        formatDate(date.dateOfDeparture).includes(searchTerm.toLowerCase()) ||
        date.dayCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
        date.price.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    const displayedDates = sortDates(filteredDates).slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredDates.length / pageSize);
    return (
        <>
            {isNotificationVisible && successMessage && (
                <ResponseMessage
                    style={{
                        margin: '15px',
                        backgroundColor: getResponseBackgroundColor(),
                        color: 'white',
                    }}>
                    {successMessage}
                </ResponseMessage>
            )}

            {editFormMessage && (
                <ResponseMessage
                    style={{
                        margin: '15px',
                        backgroundColor: getResponseBackgroundColor(),
                        color: 'white',
                    }}>
                    {editFormMessage}
                </ResponseMessage>
            )}

            {editFormMessage && hideEditFormMessageAfterTimeout()}

            <TableContainer>
                <input type="text" placeholder="Cari..." value={searchTerm} onChange={handleSearchChange} />
                <select id="sortSelect" value={sortBy} onChange={handleSortChange} className={'mt-1'}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
                <Table>

                    <thead>
                    <tr>
                        <Th>No</Th>
                        <Th>Tanggal Keberangkatan</Th>
                        <Th>Kategori Hari</Th>
                        <Th>Harga</Th>
                        <Th>Aksi</Th>
                    </tr>
                    </thead>
                    <tbody>
                    {displayedDates.map((date, index) => (
                        <tr key={date.id}>
                            <Td>{startIndex + index + 1}</Td>
                            <Td>{formatDate(date.dateOfDeparture)}</Td>
                            <Td>{date.dayCategory}</Td>
                            <Td>{`Rp${date.price}`}</Td>
                            <Td>
                                {editingDateId === date.id ? (
                                    <>
                                        <Overlay
                                            show={editingDateId !== null}
                                            onClick={handleCancelEdit}
                                        />
                                        <ModalContainer show={editingDateId !== null}>
                                            <EditFormTanggal
                                                dateId={date.id}
                                                initialData={date}
                                                onClose={handleCancelEdit}
                                                onUpdateSuccess={() => {
                                                    setEditingDateId(null);
                                                    setRefreshData(true);
                                                    setPatchMessage('Data berhasil diperbarui.');
                                                }}
                                                updateMessage={(message) => {
                                                    setEditFormMessage(message);
                                                }}
                                            />
                                        </ModalContainer>
                                    </>
                                ) : (
                                    <>
                                        <EditButton title='Edit' onClick={() => handleEditClick(date.id)}>
                                            <Icon src='https://i.ibb.co/WFKh40T/Pen.png' alt='Edit' />
                                        </EditButton>
                                        <ActionButton title='Delete' onClick={() => handleDelete(date.id)}>
                                            <Icon src='https://i.ibb.co/phm3fMy/Trash-Alt.png' alt='Delete' />
                                        </ActionButton>
                                    </>
                                )}
                            </Td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <PaginationContainer>
                    <KembaliButton onClick={handlePreviousClick} disabled={currentPage === 1}>
                        {' < Kembali'}
                    </KembaliButton>
                    <PageNumber>{currentPage}</PageNumber>
                    <SelanjutnyaButton onClick={handleNextClick} disabled={currentPage === totalPages}>
                        {'Selanjutnya > '}
                    </SelanjutnyaButton>
                </PaginationContainer>
            </TableContainer>
        </>
    );
};

export default TableTanggal;
