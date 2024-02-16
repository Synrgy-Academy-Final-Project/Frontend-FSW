import {
  Accordion,
  AccordionHeader,
  Button,
  Col,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TicketSearch.css";
import Select from "react-select";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import DropdownPassenger from "./DropdownPassenger";
import useTicketSearch from "../pages/User/TicketList/TicketList.Hooks";
import useTicketList from "../pages/User/TicketList/TicketList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

export default function TicketSearch() {
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
    // Other state variables and functions from useTicketSearch...
  } = useTicketSearch();

  const navigate = useNavigate();
  const handleNavigateToList = () => {
    // handleSearch("", {}, [], []);
    // navigate("/list-ticket");
    navigate("/list-ticket", {
      state: {
        origin: selectedOriginOption,
        destination: selectedDestinationOption,
        departureDate,
        returnDate,
        passengersData,
      },
    });
  };

  const [passengersData, setPassengersData] = useState([
    { type: "adult", count: 1 },
    { type: "child", count: 0 },
    { type: "baby", count: 0 },
  ]);

  const handlePassengerCountChange = (count, type) => {
    // Dapatkan data penumpang yang saat ini tersimpan dalam state
    const updatedPassengersData = [...passengersData];

    // Temukan indeks penumpang dengan tipe yang sesuai
    const index = updatedPassengersData.findIndex(
      (passenger) => passenger.type === type
    );

    // Jika penumpang dengan tipe yang sama sudah ada, perbarui jumlahnya
    if (index !== -1) {
      updatedPassengersData[index].count = count;
    } else {
      // Jika tidak, tambahkan penumpang baru dengan tipe dan jumlah yang sesuai
      updatedPassengersData.push({ type, count });
    }

    console.log(updatedPassengersData.length);

    // Simpan kembali data penumpang yang diperbarui ke dalam state
    setPassengersData(updatedPassengersData);
    handleSearch("", {}, updatedPassengersData, []);
  };

  return (
    <div>
      <div className="card-search">
        <Form>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Tiket Pulang?"
                  onChange={handleCheckboxChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mx-3 mb-3">
            <Col className="pe-0 form-position">
              <div className="border-field-start">
                <span className="placeholder-field">Asal</span>
                <Select
                  options={options}
                  value={selectedOriginOption}
                  onChange={handleOriginChange}
                  styles={customStylesStart}
                  placeholder="Masukkan Asal"
                  formatOptionLabel={formatOptionLabel}
                />
              </div>
            </Col>
            <Col className="ps-0 pe-1">
              <Button className="switch-button" onClick={handleSwitch}>
                <HiOutlineSwitchHorizontal />
              </Button>
              <div className="border-field-end">
                <span className="placeholder-field ms-2">Tujuan</span>
                <Select
                  options={options}
                  value={selectedDestinationOption}
                  onChange={handleDestinationChange}
                  styles={customStylesEnd}
                  placeholder="Masukkan Tujuan"
                  formatOptionLabel={formatOptionLabel}
                />
              </div>
            </Col>
            <Col className="pe-0 ps-1">
              <div className="border-field-start">
                <span className="placeholder-field">Tanggal pergi</span>
                <DatePicker
                  selected={departureDate}
                  onChange={handleDepartureDateChange}
                  className="border-0 date-start"
                  placeholderText="Pilih tanggal"
                />
                {departureDate && (
                  <p className="detail-date">{`${DepartureDay}`}</p>
                )}
              </div>
            </Col>
            <Col className="ps-0">
              <div className="border-field-end">
                <span className="placeholder-field">Tanggal pulang</span>
                <DatePicker
                  selected={returnDate}
                  onChange={handleReturnDateChange}
                  className="border-0 date-end"
                  placeholderText="Pilih tanggal"
                  disabled={!isReturnTicket}
                />
                {returnDate && <p className="detail-date">{`${ReturnDay}`}</p>}
              </div>
            </Col>
          </Row>
          <Row className="mb-3 pt-2">
            <Col></Col>
            <Col className="pe-0">
              <Accordion defaultActiveKey="null" className="rounded-start">
                <Accordion.Item
                  eventKey="0"
                  className="d-flex flex-column border-0"
                >
                  <AccordionHeader className="p-0 justify-content-between ">
                    <div className="d-flex flex-column mt-1 pt-2 ms-3">
                      <p className="accordeoon-label">Jumlah Penumpang</p>
                    </div>
                    <div className="d-flex position-absolute flex-column pt-4 mt-2 ms-3">
                      <p>Penumpang</p>
                    </div>
                  </AccordionHeader>
                  <Accordion.Body className="p-0">
                    {/* <DropdownPassenger
                      onChangeCount={(count, type) =>
                        handlePassengerCountChange(count, type)
                      }
                    /> */}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col className="ps-0 border-r">
              <FloatingLabel
                className="rounded-end"
                controlId="floatingSelectGrid"
                label="Kelas"
              >
                <Form.Select
                  aria-label="Floating label select example"
                  className="border-0"
                  onChange={handleClassChange}
                >
                  <option>Kelas</option>
                  <option value="Economy">Ekonomi</option>
                  <option value="Premium Economy">Premium Ekonomi</option>
                  <option value="Business">Bisnis</option>
                  <option value="First Class">Kelas Utama</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col></Col>
          </Row>
          <div className="text-center">
            <Button className="" onClick={handleNavigateToList}>
              <span className="px-4 text-white">Cari Tiket</span>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
