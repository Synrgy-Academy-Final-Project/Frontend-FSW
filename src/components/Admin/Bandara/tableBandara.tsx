import{ useEffect, useState } from 'react';
import styled from 'styled-components';
import { useCurrentPage } from "../CurrentPageContext.tsx";
import EditFormBandara from './EditFormBandara';

const TableContainer = styled.div`
  position: relative;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
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
    background-color: #e6f0fd;
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

const TableBandara = () => {
    const [bandaras, setBandaras] = useState([]);
    const [displayedBandaras, setDisplayedBandaras] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(3);
    const [totalItems, setTotalItems] = useState(0);
    const { refreshData, setRefreshData } = useCurrentPage();
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedBandara, setSelectedBandara] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleEditClick = (bandaraId) => {
        const selectedBandara = bandaras.find((bandara) => bandara.id === bandaraId);
        setSelectedBandara(selectedBandara);
        setShowModal(true);
    };

    useEffect(() => {
        updateDisplayedBandaras(bandaras, currentPage, pageSize);
    }, [bandaras, currentPage, pageSize]);

    useEffect(() => {
        const fetchBandaras = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }

                const response = await fetch(`https://backend-fsw.fly.dev/api/v1/airports/baseprice`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                const jsonData = await response.json();

                if (response.ok) {
                    setBandaras(jsonData.data);
                    setTotalItems(jsonData.data.length);
                    updateDisplayedBandaras(jsonData.data, 1, pageSize);
                } else {
                    throw new Error(jsonData.message || 'Error fetching data');
                }

            } catch (err) {
                console.error(err);
                setErrorMessage('Error fetching data. Please try again.');
            }
        };

        fetchBandaras();
        if (refreshData) {
            setRefreshData(false);
        }
    }, [refreshData, setRefreshData, pageSize]);

    const updateDisplayedBandaras = (data, page, size) => {
        const startIndex = (page - 1) * size;
        const endIndex = Math.min(startIndex + size, data.length);
        setDisplayedBandaras(data.slice(startIndex, endIndex));
    };

    const totalPages = Math.ceil(totalItems / pageSize);
    const isPreviousDisabled = currentPage === 1;
    const isNextDisabled = currentPage === totalPages;

    const handlePreviousClick = () => {
        if (!isPreviousDisabled) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (!isNextDisabled) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleDeleteClick = async (id) => {
        const confirmDelete = window.confirm('Yakin mau hapus data ini?');

        if (confirmDelete) {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }

                const response = await fetch(`https://backend-fsw.fly.dev/api/v1/airports/baseprice/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    setBandaras((prevBandaras) => prevBandaras.filter((bandara) => bandara.id !== id));
                    setRefreshData(true);
                    setSuccessMessage('Data berhasil dihapus.');
                    setIsNotificationVisible(true);
                    setTimeout(() => {
                        setIsNotificationVisible(false);
                    }, 3000);
                } else {
                    const jsonData = await response.json();
                    throw new Error(jsonData.message || 'Error deleting data');
                }
            } catch (err) {
                console.error(err);
                setErrorMessage('Error deleting data. Please try again.');
            }
        }
    };

    const handleEditFormMessage = (message) => {
        setErrorMessage(message);
        setIsNotificationVisible(true);
        setTimeout(() => {
            setIsNotificationVisible(false);
        }, 3000);
    };

    const handleEditFormUpdate = () => {
        setRefreshData(true);
        setIsNotificationVisible(true);
        setSuccessMessage('Data berhasil diperbarui.');
        setTimeout(() => {
            setIsNotificationVisible(false);
            setShowModal(false);
        }, 3000);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setErrorMessage('');
    };
    function formatDuration(minutes) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}j ${remainingMinutes}m`;
    }
    return (
        <>
            {isNotificationVisible && (
                <ResponseMessage
                    style={{
                        margin: '15px',
                        backgroundColor: errorMessage ? 'red' : 'green',
                        color: 'white',
                    }}
                >
                    {errorMessage || successMessage}
                </ResponseMessage>
            )}

            <TableContainer>
                {showModal && selectedBandara && (
                    <EditFormBandara
                        bandara={selectedBandara}
                        onUpdate={handleEditFormUpdate}
                        onEditFormMessage={handleEditFormMessage}
                        onClose={handleCloseModal}
                        id={selectedBandara.id}
                    />
                )}

                <Table>
                    <thead>
                    <tr>
                        <Th>No</Th>
                        <Th>Kota/Bandara Asal</Th>
                        <Th>Kota/Bandara Tujuan</Th>
                        <Th>Durasi</Th>
                        <Th>Harga</Th>
                        <Th>Aksi</Th>
                    </tr>
                    </thead>
                    <tbody>
                    {displayedBandaras.map((bandara, index) => (
                        <tr key={bandara.id}>
                            <Td>{(currentPage - 1) * pageSize + index + 1}</Td>
                            <Td>{bandara.fromCity} ({bandara.fromCode})</Td>
                            <Td>{bandara.toCity} ({bandara.toCode})</Td>
                            <Td>{formatDuration(bandara.duration)}</Td>
                            <Td>Rp{bandara.price}</Td>
                            <Td>
                                <ActionButton
                                    title="Edit"
                                    onClick={() => handleEditClick(bandara.id)}
                                >
                                    <Icon src="https://i.ibb.co/WFKh40T/Pen.png" alt="Edit" />
                                </ActionButton>
                                <ActionButton
                                    title="Delete"
                                    onClick={() => handleDeleteClick(bandara.id)}
                                >
                                    <Icon src="https://i.ibb.co/phm3fMy/Trash-Alt.png" alt="Delete" />
                                </ActionButton>
                            </Td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <PaginationContainer>
                    <KembaliButton onClick={handlePreviousClick} disabled={isPreviousDisabled}>
                        {' < Kembali'}
                    </KembaliButton>
                    <PageNumber>{currentPage}</PageNumber>
                    <SelanjutnyaButton onClick={handleNextClick} disabled={isNextDisabled}>
                        {'Selanjutnya > '}
                    </SelanjutnyaButton>
                </PaginationContainer>
            </TableContainer>
        </>
    );
};

export default TableBandara;
