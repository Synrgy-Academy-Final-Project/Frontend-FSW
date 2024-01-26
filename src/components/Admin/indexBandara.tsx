import React, {useEffect} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import FormInputBandara from './Bandara/FormInputBandara.tsx';
import TableBandara from './Bandara/tableBandara.tsx';
import styled from 'styled-components';
import {CurrentPageProvider,useCurrentPage} from "./CurrentPageContext.tsx";

const PageLayout = styled.div`
  display: flex;
  height: 100%;
`;

const MainContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  background: #f5f5f9;
  //padding: 1rem;
`;
const TableWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const IndexBandaraContent = () => {
    const { setCurrentPage } = useCurrentPage();

    useEffect(() => {
        setCurrentPage('Data Kota/Bandara');
    }, [setCurrentPage]);

    return (
        <>
            <Sidebar />
            <MainContent>
                <Navbar />
                <TableWrapper>
                    <FormInputBandara />
                    <TableBandara />
                </TableWrapper>
            </MainContent>
        </>
    );
};
const IndexBandara = () => {
    return (
        <CurrentPageProvider>
            <PageLayout>
                <IndexBandaraContent />
            </PageLayout>
        </CurrentPageProvider>
    );
};
export default IndexBandara;