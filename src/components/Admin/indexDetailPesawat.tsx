import {useEffect, useState} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import {CurrentPageProvider,useCurrentPage} from "./CurrentPageContext.tsx";
import TableDetailPesawat from './Maskapai/Detail/tableDetailPesawat.tsx';
import FormInputClass from './Maskapai/Detail/ClassAirplane/FormInputClass.tsx';
import TableClass from './Maskapai/Detail/ClassAirplane/tableClass.tsx';
import FormInputSchedule from './Maskapai/Detail/Schedule/FormInputSchedule.tsx';
import TableSchedule from './Maskapai/Detail/Schedule/tableSchedule.tsx';
import {useParams} from "react-router-dom";

const PageLayout = styled.div`
  display: flex;
  height: 100%;
`;

const MainContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  background: #f5f5f9;
`;

const TableWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const IndexDetailPesawatContent = () => {
    const { setCurrentPage } = useCurrentPage();
    const { id } = useParams();
    const [airplaneDetails, setAirplaneDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            setError('No token found');
            setLoading(false);
            return;
        }

        fetch(`https://backend-fsw.fly.dev/api/v1/airplanes/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch airplane details');
                }
            })
            .then(data => {
                setAirplaneDetails(data.data[0]);
                console.log(data)
                setCurrentPage(`Detail Pesawat ${data.data[0].airplaneName}`);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [id, setCurrentPage]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <>
            <Sidebar />
            <MainContent>
                <Navbar />
                <TableWrapper>
                    <TableDetailPesawat airplaneDetails={airplaneDetails} />
                    <FormInputClass airplaneId={id} />
                    <TableClass />
                    <FormInputSchedule airplaneId={id} />
                    <TableSchedule />
                </TableWrapper>
            </MainContent>
        </>
    );
};

const IndexDetailPesawat = () => {
    return (
        <CurrentPageProvider>
            <PageLayout>
                <IndexDetailPesawatContent />
            </PageLayout>
        </CurrentPageProvider>
    );
};

export default IndexDetailPesawat;
