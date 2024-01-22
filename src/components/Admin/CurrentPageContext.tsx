import React, { createContext, useState, useContext } from 'react';


interface CurrentPageContextType {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const CurrentPageContext = createContext<CurrentPageContextType>({
    currentPage: '',
    setCurrentPage: () => {}
});

export const CurrentPageProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('Hello Admin!');

    return (
        <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </CurrentPageContext.Provider>
    );
};


export const useCurrentPage = () => useContext(CurrentPageContext);

export default CurrentPageContext;
