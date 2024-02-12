import React, { useEffect, useState } from "react";
import PesananEmpty from "./PesananEmpty";
import PesananExist from "./PesananExist";
import { BoldBlack, TrackWrapper } from "./styles/PesananContent.styled";
import { useNavigate } from "react-router-dom";

interface PesananContentProps {
  selectedOption: number | null;
}

interface Transaction {
  oderCode: string;
  totalPrice: number;
  departureCode: string;
  departureCityCode: string;
  arrivalCode: string;
  arrivalCityCode: string;
  transactionStatus: string;
}
const PesananContent: React.FC<PesananContentProps> = ({ selectedOption }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          return;
        }

        const response = await fetch(
          "https://fly-id-1999ce14c36e.herokuapp.com/transaction/history",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          // Handle error response
          if (response.status === 401) {
            localStorage.removeItem("token");
            setIsLoggedIn(false);
          } else {
            throw new Error("Failed to fetch transactions");
          }
        }

        const responseData = await response.json();
        setTransactions(responseData.data.content);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Anda yakin ingin keluar dari akun?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  const renderSelectedComponent = () => {
    if (!isLoggedIn) {
      return <PesananEmpty />;
    }

    if (selectedOption === 1) {
      return (
        <>
          <BoldBlack>Pesanan</BoldBlack>
          {transactions.length > 0 ? (
            <PesananExist transactions={transactions} />
          ) : (
            <PesananEmpty />
          )}
        </>
      );
    }

    if (selectedOption === 6) {
      handleLogout();
      return null;
    }

    return <PesananEmpty />;
  };

  return (
    <>
      <TrackWrapper>
        {/* <PesananEmpty /> */}
        {/* <PesananExist /> */}
        {renderSelectedComponent()}
      </TrackWrapper>
    </>
  );
};
export default PesananContent;
