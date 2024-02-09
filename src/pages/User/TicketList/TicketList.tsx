import { CircularProgress, Pagination, Stack } from "@mui/material";
import DetailTicket from "../../../components/DetailTicket";
import FilterListTicket from "../../../components/FilterListTicket";
import useTicketSearch from "./TicketList.Hooks";
import {
  Accordion,
  AccordionHeader,
  Button,
  Col,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import Select from "react-select";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import DatePicker from "react-datepicker";
import DropdownPassenger from "../../../components/DropdownPassenger";
import MinimumPrice from "../../../components/MinPrice";
import { useState } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

const customStylesStart = {
  control: (provided) => ({
    ...provided,
    position: "relative",
    border: "none",
    padding: "20px 0 0 10px",
    borderRadius: "0.75rem 0 0 0.75rem",
    height: "110px",
    "&:hover": {
      borderBottom: "none !important", // Remove the hover border
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none", // Remove the vertical separator
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    display: "none", // Remove the dropdown indicator
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "24px",
    color: "black",
    fontWeight: "bold",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#3E7BFA" : "white",
    color: state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: "",
    },
  }),
};

const customStylesEnd = {
  control: (provided) => ({
    ...provided,
    position: "relative",
    border: "none",
    padding: "20px 0 0 20px",
    borderRadius: "0rem 0.75rem 0.75rem 0rem",
    height: "110px",
    "&:hover": {
      borderBottom: "none !important", // Remove the hover border
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none", // Remove the vertical separator
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    display: "none", // Remove the dropdown indicator
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "24px",
    color: "black",
    fontWeight: "bold",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#3E7BFA" : "white",
    color: state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: "",
    },
  }),
};

export default function TicketList() {
  const {
    options,
    isReturnTicket,
    selectedOriginOption,
    selectedDestinationOption,
    departureDate,
    returnDate,
    DepartureDay,
    ReturnDay,
    handleOriginChange,
    handleDestinationChange,
    handleDepartureDateChange,
    handleReturnDateChange,
    handleSwitch,
    handleCheckboxChange,
    handleClassChange,
    handleSearch,
    loading,
    tickets,
    minprice,
    // Other state variables and functions from useTicketSearch...
  } = useTicketSearch();

  const token = localStorage.getItem("token");
  const handleLogout = () => {
    // Hapus token dari local storage
    localStorage.removeItem("token");
    window.location.reload();
  };
  const label = "LIST-TICKET";

  const renderLoading = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 0",
        }}
      >
        <CircularProgress />
      </div>
    );
  };

  const isOptionsSelected = selectedOriginOption && selectedDestinationOption;

  const [currentPage, setCurrentPage] = useState<number>(1);

  const renderContent = () => {
    if (loading) {
      return renderLoading();
    }

    if (!isOptionsSelected) {
      // Tampilkan pesan bahwa asal dan tujuan harus dipilih
      return (
        <div className="text-center">
          <p className="fs-6 text-secondary">Pilih Rute Penerbangan Anda</p>
        </div>
      );
    }

    const itemsPerPage = 5; // Change this according to your needs
    const indexOfLastTicket = currentPage * itemsPerPage;
    const indexOfFirstTicket = indexOfLastTicket - itemsPerPage;
    const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);

    return (
      <>
        <div className="mb-3">
          <MinimumPrice minprice={minprice} />
        </div>
        <div>
          <p className="fs-6">
            kami memiliki{" "}
            <span className="fw-bold text-black fs-6">{tickets.length}</span>{" "}
            ticket dari{" "}
            <span className="fw-bold text-black fs-6">
              {selectedOriginOption.label}
            </span>{" "}
            ke{" "}
            <span className="fw-bold text-black fs-6">
              {selectedDestinationOption.label}
            </span>
          </p>
        </div>
        <div>
          <DetailTicket tickets={currentTickets} />
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(tickets.length / itemsPerPage)}
              page={currentPage}
              onChange={(event, value) => setCurrentPage(value)}
            />
          </Stack>
        </div>
      </>
    );
  };

  const formatOptionLabel = ({ label, detailLabel }) => (
    <div>
      <strong style={{ fontSize: "24px", lineHeight: "40px" }}>{label}</strong>
      <br />
      <span style={{ fontSize: "16px", color: "gray", lineHeight: "2px" }}>
        {" "}
        {detailLabel}
      </span>
    </div>
  );

  return (
    <div>
      {/* <Header label="LIST-TICKET" /> */}
      {/* Header */}
      <Header />
      {/* End HEader */}
      <div className="container">
        <div className="row my-5">
          <div className="col-4">
            <FilterListTicket />
          </div>
          <div className="col-8">{renderContent()}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
