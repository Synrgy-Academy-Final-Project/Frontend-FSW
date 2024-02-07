import {useEffect, useState} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import FormInputMaskapai from './Maskapai/FormInputMaskapai';
import TableMaskapai from './Maskapai/tableMaskapai.tsx';
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



const IndexMaskapaiContent = () => {
    const { setCurrentPage } = useCurrentPage();
    const [refreshData, setRefreshData] = useState<number | boolean>(false);


    const handleRefreshData = () => {
        setRefreshData(Date.now());
    };


    useEffect(() => {
        setCurrentPage('Data Maskapai');
    }, [setCurrentPage]);

    return (
        <>
            <Sidebar />
            <MainContent>
                <Navbar />
                <TableWrapper>
                    <FormInputMaskapai onRefreshData={handleRefreshData} />
                    <TableMaskapai key={refreshData.toString()} refreshData={refreshData} onRefresh={handleRefreshData} />




                </TableWrapper>
            </MainContent>
        </>
    );
};

const IndexMaskapai = () => {
    return (
        <CurrentPageProvider>
            <PageLayout>
                <IndexMaskapaiContent />
            </PageLayout>
        </CurrentPageProvider>
    );
};

export default IndexMaskapai;