import React, {useEffect} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import {CurrentPageProvider,useCurrentPage} from "./CurrentPageContext.tsx";
import TableDetailPesawat from './Maskapai/Detail/tableDetailPesawat.tsx';
import FormInputClass from './Maskapai/Detail/ClassAirplane/FormInputClass.tsx';
import TableClass from './Maskapai/Detail/ClassAirplane/TableClass.tsx';
import FormInputSchedule from './Maskapai/Detail/Schedule/FormInputSchedule.tsx';
import TableSchedule from './Maskapai/Detail/Schedule/TableSchedule.tsx';

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

    useEffect(() => {
        setCurrentPage('Detail Pesawat Airbus A320');
    }, [setCurrentPage]);

    return (
        <>
            <Sidebar />
            <MainContent>
                <Navbar />
                <TableWrapper>
                    <TableDetailPesawat/>
                    <FormInputClass />
                    <TableClass />
                    <FormInputSchedule />
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
