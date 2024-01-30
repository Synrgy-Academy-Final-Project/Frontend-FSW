import {useEffect} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import FormInputTanggal from './Tanggal/FormInputTanggal.tsx';
import TableTanggal from './Tanggal/tableTanggal.tsx';
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

const IndexTanggalContent = () => {
    const { setCurrentPage } = useCurrentPage();

    useEffect(() => {
        setCurrentPage('Data Tanggal');
    }, [setCurrentPage]);

    return (
        <>
            <Sidebar />
            <MainContent>
                <Navbar />
                <TableWrapper>
                    <FormInputTanggal />
                    <TableTanggal />
                </TableWrapper>
            </MainContent>
        </>
    );
};
const IndexTanggal = () => {
    return (
        <CurrentPageProvider>
            <PageLayout>
                <IndexTanggalContent />
            </PageLayout>
        </CurrentPageProvider>
    );
};
export default IndexTanggal;