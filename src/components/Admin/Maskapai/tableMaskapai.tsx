import {useEffect, useState} from 'react';
import styled from 'styled-components';
import EditFormDetailPesawat from './EditFormDetailPesawat.tsx'
import {useNavigate} from "react-router-dom";

interface ShowProps {
    show: boolean;
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
  top: 45%;
  left: 55%;
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

const LogoLink = styled.a`
  display: inline-block;
  max-width: 150px; // Adjust the width as needed
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
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
  background: #fff;
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
`
const ErrorContainer = styled.div`
  padding: 16px;
  background-color: #ffcccc;
  color: #cc0000;
  text-align: center;
  border-radius: 8px;
  margin: 16px;
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
const LoadingContainer = styled.div`
  padding: 16px;
  text-align: center;
`;
// Di dalam TableMaskapai component
interface TableMaskapaiProps {
    refreshData: number | boolean;
    onRefresh: () => void; // Tambahkan definisi tipe untuk onRefresh
}

const ITEMS_PER_PAGE = 5;
const TableMaskapai = ({ refreshData, onRefresh }) => {
    const navigate = useNavigate();

    const viewDetails = (id) => {
        navigate(`/detail-airline/${id}`);
    };
    // GET API
    const [airplanes, setAirplanes] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            setError('No token found');
            setIsLoading(false);
            return;
        }

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://backend-fsw.fly.dev/api/v1/airplanes', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Error fetching airplanes');
                }

                const data = await response.json();
                setAirplanes(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [refreshData]);

    const totalPages = Math.ceil(airplanes.length / ITEMS_PER_PAGE);
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = airplanes.slice(indexOfFirstItem, indexOfLastItem);

    const handlePreviousClick = () => {
        setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
    };

    const handleNextClick = () => {
        setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
    };
    const safeURL = (url) => {
        try {
            return new URL(url).hostname;
        } catch (error) {
            return url;
        }
    };
    // ################################################################################################

    // DELETE API
    const [deleteError, setDeleteError] = useState('');
    const deleteAirplane = async (id) => {
        const token = localStorage.getItem('token');

        if (!token) {
            setError('No token found');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(`https://backend-fsw.fly.dev/api/v1/airplanes/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();

            if (response.ok) {
                setAirplanes(airplanes.filter(airplane => airplane.id !== id));
                alert(data.message);
            } else {
                // Handle non-OK responses
                throw new Error(data.message);
            }
        } catch (error) {
            setDeleteError(error.message);
            setTimeout(() => {
                setDeleteError('');
            }, 3000); // Menampilkan pesan selama 3 detik
        } finally {
            setIsLoading(false);
        }
    };

    // ################################################################################################

    // PATCH POP UP
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedAirplane, setSelectedAirplane] = useState(null);

    // Function to open modal with selected airplane data
    const openEditModal = (airplane) => {
        setSelectedAirplane(airplane);
        setShowEditModal(true);
    };

    // Function to close the modal
    const closeEditModal = () => {
        setSelectedAirplane(null);
        setShowEditModal(false);
    };
    const handlePatchSuccess = () => {
        if (onRefresh) {
            onRefresh(); // Memanggil fungsi refresh
        }
    };
    return (
        <>
            <Overlay show={showEditModal} onClick={closeEditModal} />
            <ModalContainer show={showEditModal}>
                {selectedAirplane && (
                    <EditFormDetailPesawat
                        airplane={selectedAirplane}
                        closeModal={closeEditModal}
                        onPatchSuccess={handlePatchSuccess}
                    />
                )}
            </ModalContainer>
                {isLoading && <LoadingContainer>Loading...</LoadingContainer>}
                {!isLoading && error && <ErrorContainer>{error}</ErrorContainer>}
                {deleteError && <ErrorContainer>{deleteError}</ErrorContainer>}

            <TableContainer>
                {!isLoading && !error && (
                    <>
                        <Table>
                            <thead>
                            <tr>
                                <Th>No</Th>
                                <Th>Maskapai</Th>
                                <Th>Logo</Th>
                                <Th>Nama Pesawat</Th>
                                <Th>Kode Pesawat</Th>
                                <Th>Harga</Th>
                                <Th>Aksi</Th>
                            </tr>
                            </thead>
                            <tbody>
                            {currentItems.map((airplane, index) => (
                                <tr key={airplane.id}>
                                    <Td>{indexOfFirstItem + index + 1}</Td>
                                    <Td>{airplane.airlineName}</Td>
                                    <Td>
                                        <LogoLink href={airplane.url} target="_blank" rel="noopener noreferrer" title={airplane.url}>
                                            {safeURL(airplane.url)}
                                        </LogoLink>
                                    </Td>
                                    <Td>{airplane.airplaneName}</Td>
                                    <Td>{airplane.airplaneCode}</Td>
                                    <Td>{`Rp${airplane.airplanePrice.toLocaleString()}`}</Td>
                                    <Td>
                                        <ActionButton title="View" onClick={() => viewDetails(airplane.id)}>
                                            <Icon src="https://i.ibb.co/MpgsSYS/File-Alt.png" alt="View" />
                                        </ActionButton>
                                        <ActionButton title="Edit" onClick={() => openEditModal(airplane)}>
                                            <Icon src="https://i.ibb.co/WFKh40T/Pen.png" alt="Edit" />
                                        </ActionButton>
                                        <ActionButton title="Delete" onClick={() => deleteAirplane(airplane.id)}>
                                            <Icon src="https://i.ibb.co/phm3fMy/Trash-Alt.png" alt="Delete" />
                                        </ActionButton>
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
                            <SelanjutnyaButton onClick={handleNextClick} disabled={currentPage >= totalPages}>
                                {'Selanjutnya > '}
                            </SelanjutnyaButton>
                        </PaginationContainer>
                    </>
                )}
            </TableContainer>
        </>
    );
};


export default TableMaskapai;
