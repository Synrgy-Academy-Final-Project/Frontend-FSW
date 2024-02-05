import {useEffect} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import TableTransaksi from './Transaksi/tableTransaksi.tsx';
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

const IndexTransaksiContent = () => {
    const { setCurrentPage } = useCurrentPage();

    useEffect(() => {
        setCurrentPage('Laporan Transaksi');
    }, [setCurrentPage]);

    return (
        <>
            <Sidebar />
            <MainContent>
                <Navbar />
                <TableWrapper>
                    <TableTransaksi />
                </TableWrapper>
            </MainContent>
        </>
    );
};
const IndexTransaksi = () => {
    return (
        <CurrentPageProvider>
            <PageLayout>
                <IndexTransaksiContent />
            </PageLayout>
        </CurrentPageProvider>
    );
};
export default IndexTransaksi;