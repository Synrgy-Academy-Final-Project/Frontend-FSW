import { createContext, useState, useContext } from 'react';


interface CurrentPageContextType {
    currentPage: string;
    setCurrentPage: (page: string) => void;
    refreshData: boolean;
    setRefreshData: (refresh: boolean) => void;
}

const CurrentPageContext = createContext<CurrentPageContextType>({
    currentPage: '',
    setCurrentPage: () => {},
    refreshData: false,
    setRefreshData: () => {}
});

export const CurrentPageProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('Hello Admin!');
    const [refreshData, setRefreshData] = useState(false);

    return (
        <CurrentPageContext.Provider value={{ currentPage, setCurrentPage, refreshData, setRefreshData }}>
            {children}
        </CurrentPageContext.Provider>
    );
};


export const useCurrentPage = () => useContext(CurrentPageContext);

export default CurrentPageContext;
