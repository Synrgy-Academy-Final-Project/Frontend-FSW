import React, { useEffect, useState } from "react";
import PesananEmpty from "./PesananEmpty";
import PesananExist from "./PesananExist";
import { BoldBlack, TrackWrapper } from "./styles/PesananContent.styled";

interface PesananContentProps {
  selectedOption: number | null;
}

interface Transaction {
  userId: string;
  id: string;
  companyName: string | null;
  url: string | null;
  airplaneId: string;
  airplaneName: string;
  airplaneCode: string;
  airplaneClassId: string;
  airplaneClass: string;
  airplaneTimeFlightId: string;
  departureCode: string;
  departureDate: string;
  departureTime: string;
  arrivalCode: string;
  arrivalDate: string;
  arrivalTime: string;
  totalSeat: number;
  priceFlight: number | null;
  seatMature: number | null;
  totalMatureTransaction: number | null;
  seatBaby: number | null;
  totalBabyTransaction: number | null;
  totalPrice: number;
  orderCode: string | null;
  promotion: {
    id: string;
    title: string;
    description: string;
    code: string;
    discount: number;
    terms: string;
    startDate: string;
    endDate: string;
  } | null;
  discount: number | null;
  totalDiscount: number | null;
  taxAdmin: number | null;
  passenger: { id: string }[];
}

const PesananContent: React.FC<PesananContentProps> = ({ selectedOption }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchLoggedInUserId = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          return;
        }

        const response = await fetch(
          "https://fly-id-1999ce14c36e.herokuapp.com/user-detail/logged-in-user",
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
            throw new Error("Failed to fetch user ID");
          }
        }

        const responseData = await response.json();
        const loggedInUserId = responseData.data.usersDetails.id;

        setLoggedInUserId(loggedInUserId);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error fetching logged in user ID:", error);
      }
    };

    fetchLoggedInUserId();
  }, []);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token || !loggedInUserId) {
          return;
        }

        const response = await fetch(
          "https://fly-id-1999ce14c36e.herokuapp.com/transaction",
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

        const userTransactions = responseData.data.content.filter(
          (transaction: Transaction) => transaction.userId === loggedInUserId
        );

        setTransactions(userTransactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    if (isLoggedIn && loggedInUserId) {
      fetchTransactions();
    }
  }, [isLoggedIn, loggedInUserId]);

  const renderSelectedComponent = () => {
    if (!isLoggedIn) {
      return <PesananEmpty />;
    }

    if (selectedOption === 1) {
      return (
        <>
          {transactions.length > 0 ? (
            <PesananExist transactions={transactions} />
          ) : (
            <PesananEmpty />
          )}
        </>
      );
    }

    return <PesananEmpty />;
  };

  return (
    <>
      <TrackWrapper>
        <BoldBlack>Pesanan</BoldBlack>
        {/* <PesananEmpty /> */}
        {/* <PesananExist /> */}
        {renderSelectedComponent()}
      </TrackWrapper>
    </>
  );
};
export default PesananContent;
