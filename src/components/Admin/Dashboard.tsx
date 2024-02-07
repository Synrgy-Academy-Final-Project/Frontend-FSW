import { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Sidebar from "./Sidebar.tsx";
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

const DashboardContent = () => {
    const { setCurrentPage } = useCurrentPage();
    useEffect(() => {
        const userProfile = JSON.parse(localStorage.getItem("userProfile") || '{}');
        setCurrentPage(`Hello ${userProfile.first_name} ${userProfile.last_name}!`);
    }, [setCurrentPage]);

    return (
        <>
            <Sidebar />
            <MainContent>
                <Navbar />
            </MainContent>
        </>
    );
};

const Dashboard = () => {
    return (
        <CurrentPageProvider>
            <PageLayout>
                <DashboardContent />
            </PageLayout>
        </CurrentPageProvider>
    );
};

export default Dashboard;
