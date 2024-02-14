import {useEffect, useState} from 'react';
import styled from 'styled-components';
import EditFormClass from "./EditFormClass.tsx";

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

const itemsPerPage = 5;

const TableClass = ({ airplaneId, refreshTable, onRefresh }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedClassData, setSelectedClassData] = useState(null);
    const [classData, setClassData] = useState([]);
    const [sortBy, setSortBy] = useState('newest');
    const sortData = (data) => {
        const sortedData = [...data];
        sortedData.sort((a, b) => {
            const dateA = new Date(a.updated_date).getTime();
            const dateB = new Date(b.updated_date).getTime();
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
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            setError('No token found');
            setLoading(false);
            return;
        }

        fetch(`https://backend-fsw.fly.dev/api/v1/classes/airplane/${airplaneId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 401) {
                    throw new Error('Invalid Token');
                } else if (response.status === 404) {
                    throw new Error('ID Airplane Not Found');
                } else if (response.status === 400) {
                    throw new Error('Bad Request');
                } else if (response.status === 403) {
                    window.location.href = '/login-admin';
                    throw new Error('Error Fetching Data');
                }else {
                    throw new Error('Internal Server Error');
                }
            })
            .then(data => {
                if (data.status === 200) {
                    setClassData(data.data);
                    setLoading(false);
                } else {
                    setError(data.message);
                    setLoading(false);
                }
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [airplaneId, refreshTable]);

    const totalPages = Math.ceil(classData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedData = classData.slice(startIndex, endIndex);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }

    // ##############################################################################################
    // #DELETE
    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');
        if (!confirmDelete) {
            return;
        }
        const token = localStorage.getItem('token');

        if (!token) {
            setError('No token found');
            return;
        }

        fetch(`https://backend-fsw.fly.dev/api/v1/classes/airplane/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.status === 200) {
                    console.log('Item deleted successfully');
                    alert('Data berhasil dihapus');
                    onRefresh(); // Memperbarui tabel setelah item berhasil dihapus
                } else if (response.status === 401) {
                    throw new Error('Invalid Token');
                } else if (response.status === 404) {
                    throw new Error('ID Airplane Not Found');
                } else if (response.status === 400) {
                    throw new Error('Bad Request');
                } else if (response.status === 500) {
                    throw new Error('Internal Server Error');
                } else {
                    throw new Error('Unknown Error');
                }
            })
            .catch(error => {
                setError(error.message);
                alert('Terjadi kesalahan: ' + error.message);
            });
    };



    // ################################################
    // PATCH API
    const openEditModal = (classData) => {
        setSelectedClassData(classData);
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
        setSelectedClassData(null);
    };

    return (
        <>
            <Overlay show={showEditModal} onClick={closeEditModal} />
            <ModalContainer show={showEditModal}>
                {selectedClassData && (
                    <EditFormClass
                        airplaneClassData={selectedClassData}
                        closeModal={closeEditModal}
                        onRefresh={onRefresh}
                    />
                )}
            </ModalContainer>
            <TableContainer>
                <select id="sortSelect" value={sortBy} onChange={handleSortChange} className={'mt-1'}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
                <Table>
                    <thead>
                    <tr>
                        <Th>No</Th>
                        <Th>Nama Pesawat</Th>
                        <Th>Kelas</Th>
                        <Th>Kapasitas</Th>
                        <Th>Harga</Th>
                        <Th>Aksi</Th>
                    </tr>
                    </thead>
                    <tbody>
                    {sortData(displayedData).map((item, index) => (
                        <tr key={index}>
                            <Td>{startIndex + index + 1}</Td>
                            <Td>{item.airplaneName}</Td>
                            <Td>{item.airplaneClassName}</Td>
                            <Td>{item.capacity}</Td>
                            <Td>{item.airplaneClassPrice}</Td>
                            <Td>
                                <ActionButton title="Edit" onClick={() => openEditModal(item)}>
                                    <Icon src="https://i.ibb.co/WFKh40T/Pen.png" alt="Edit" />
                                </ActionButton>

                                <ActionButton title="Delete" onClick={() => handleDelete(item.id)}>
                                    <Icon src="https://i.ibb.co/phm3fMy/Trash-Alt.png" alt="Delete" />
                                </ActionButton>
                            </Td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <PaginationContainer>
                    <KembaliButton
                        disabled={currentPage === 1}
                        onClick={handlePreviousPage}
                    >
                        {' < Kembali'}
                    </KembaliButton>
                    <PageNumber>{currentPage}</PageNumber>
                    <SelanjutnyaButton
                        disabled={currentPage === totalPages}
                        onClick={handleNextPage}
                    >
                        {'Selanjutnya > '}
                    </SelanjutnyaButton>
                </PaginationContainer>
            </TableContainer>
        </>
    );
};

export default TableClass;