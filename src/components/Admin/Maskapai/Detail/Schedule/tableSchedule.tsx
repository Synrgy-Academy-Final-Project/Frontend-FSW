import { useState, useEffect } from 'react';
import styled from 'styled-components';
import EditFormSchedule from "./EditFormSchedule.tsx";

interface ShowProps {
    show: boolean;
}

interface TableScheduleProps {
    airplaneId: string;
    refreshTable: boolean;
}

const Overlay = styled.div<ShowProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const ModalContainer = styled.div<ShowProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  display: ${(props) => (props.show ? 'block' : 'none')};
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
`;

const Td = styled.td`
  padding: 8px;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
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
    border: none;
    cursor: not-allowed;
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
    border: none;
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

const TableSchedule: React.FC<TableScheduleProps> = ({ airplaneId, refreshTable }) => {

    const [flightTimes, setFlightTimes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [formDataToEdit, setFormDataToEdit] = useState({
        flightTime: '',
        airplaneFlightTimePrice: 0
    });

    const ITEMS_PER_PAGE = 3;
    const [refreshFlag, setRefreshFlag] = useState(false);
    const handleRefresh = () => {
        setRefreshFlag(prevFlag => !prevFlag); // Toggle refresh flag to trigger data reload
    };
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('No token found');
            setLoading(false);
            return;
        }

        fetch(`https://backend-fsw.fly.dev/api/v1/flightimes/airplane/${airplaneId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status === 401 ? 'Invalid Token' : 'Error fetching data');
                }
                return response.json();
            })
            .then(data => {
                if (data.status === 200) {
                    setFlightTimes(data.data);
                } else {
                    throw new Error(data.message);
                }
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [airplaneId, refreshTable, refreshFlag]);

    const totalPages = Math.ceil(flightTimes.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentFlightTimes = flightTimes.slice(startIndex, endIndex);

    const handlePrevious = () => {
        setCurrentPage(current => Math.max(current - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage(current => Math.min(current + 1, totalPages));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }



    const handleDelete = (flightId) => {
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');
        if (!confirmDelete) {
            return;
        }
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Token tidak ditemukan.');
            return;
        }

        fetch(`https://backend-fsw.fly.dev/api/v1/flightimes/airplane/${flightId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status === 401 ? 'Token tidak valid' : response.status === 404 ? 'ID Pesawat Tidak Ditemukan' : 'Terjadi kesalahan saat menghapus');
                }
            })
            .then(data => {
                console.log('Delete successful:', data.message);
                setFlightTimes(flightTimes.filter(flight => flight.id !== flightId));
                alert('Data berhasil dihapus.');
            })
            .catch(error => {
                console.error('Error:', error);
                alert(error.message);
            });
    };


    const openEditModal = (flight) => {
        setSelectedFlight(flight);
        setEditModalVisible(true);
    };

    const closeEditModal = () => {
        setEditModalVisible(false);
        setSelectedFlight(null);
    };
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            closeEditModal();
        }
    };

    return (
        <>
            {editModalVisible && (
                <Overlay show={editModalVisible} onClick={handleOverlayClick}>
                    <ModalContainer show={editModalVisible}>
                        <EditFormSchedule flightData={selectedFlight} closeModal={closeEditModal} refreshData={handleRefresh} />
                    </ModalContainer>
                </Overlay>


            )}

            <TableContainer>
                <Table>
                    <thead>
                    <tr>
                        <Th>No</Th>
                        <Th>Nama Pesawat</Th>
                        <Th>Jadwal Terbang</Th>
                        <Th>Harga</Th>
                        <Th>Aksi</Th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentFlightTimes.map((flight, index) => (
                        <tr key={flight.id}>
                            <Td>{startIndex + index + 1}</Td>
                            <Td>{flight.airplaneName}</Td>
                            <Td>{flight.flightTime}</Td>
                            <Td>{`Rp${flight.airplaneFlightTimePrice.toLocaleString()}`}</Td>
                            <Td>
                                <ActionButton title="Edit" onClick={() => openEditModal(flight)}>
                                    <Icon src="https://i.ibb.co/WFKh40T/Pen.png" alt="Edit" />
                                </ActionButton>
                                <ActionButton title="Delete" onClick={() => handleDelete(flight.id)}>
                                    <Icon src="https://i.ibb.co/phm3fMy/Trash-Alt.png" alt="Delete" />
                                </ActionButton>
                            </Td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <PaginationContainer>
                    <KembaliButton onClick={handlePrevious} disabled={currentPage === 1}>
                        {' < Kembali'}
                    </KembaliButton>
                    <PageNumber>{currentPage}</PageNumber>
                    <SelanjutnyaButton onClick={handleNext} disabled={currentPage >= totalPages}>
                        {'Selanjutnya > '}
                    </SelanjutnyaButton>
                </PaginationContainer>
            </TableContainer>
        </>
    );
};

export default TableSchedule;
