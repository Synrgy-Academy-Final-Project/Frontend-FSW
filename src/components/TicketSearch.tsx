import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TicketSearch.css";
import Select from "react-select";
import { useState } from "react";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

interface Option {
  value: string;
  label: string;
  detailLabel: string;
}

const options: Option[] = [
  { value: "soekarno hatta", label: "Jakarta", detailLabel: "Soekarno Hatta" },
  {
    value: "ngurah rai",
    label: "Bali",
    detailLabel: "I Gusti Ngurah Rai International Airport",
  },
  { value: "adi sumarmo", label: "Solo", detailLabel: "Adi Sumarmo" },
];

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
    padding: "20px 0 0 10px",
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

interface TicketSearch {
  selectedOption: Option | null;
}

const getHariFromDate = (date: Date | null): string => {
  if (date) {
    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const dayIndex = date.getDay();
    return days[dayIndex];
  }
  return "";
};

export default function TicketSearch() {
  const [selectedOriginOption, setSelectedOriginOption] =
    useState<Option | null>(null);
  const [selectedDestinationOption, setSelectedDestinationOption] =
    useState<Option | null>(null);

  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [DepartureDay, setDepartureDay] = useState<string>("");
  const [ReturnDay, setReturnDay] = useState<string>("");

  const handleOriginChange = (selected: Option | null) => {
    setSelectedOriginOption(selected);
  };
  const handleDestinationChange = (selected: Option | null) => {
    setSelectedDestinationOption(selected);
  };

  const handleSwitch = () => {
    // Swap the values of selectedOriginOption and selectedDestinationOption
    const temp = selectedOriginOption;
    setSelectedOriginOption(selectedDestinationOption);
    setSelectedDestinationOption(temp);
  };

  const handleDepartureDateChange = (date: Date | null) => {
    setDepartureDate(date);

    if (date) {
      const day = getHariFromDate(date);
      setDepartureDay(day);
    }
  };

  const handleReturnDateChange = (date: Date | null) => {
    setReturnDate(date);

    if (date) {
      const day = getHariFromDate(date);
      setReturnDay(day);
    }
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
                <Form.Check type="checkbox" label="Tiket Pulang?" />
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
              <div className="border-field-end ps-2">
                <span className="placeholder-field">Tujuan</span>
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
                <span className="placeholder-field">Tanggal pergi</span>
                <DatePicker
                  selected={returnDate}
                  onChange={handleReturnDateChange}
                  className="border-0 date-end"
                  placeholderText="Pilih tanggal"
                />
                {returnDate && <p className="detail-date">{`${ReturnDay}`}</p>}
              </div>
            </Col>
          </Row>
          <Row className="mb-3 pt-2">
            <Col></Col>
            <Col className="pe-0">
              <FloatingLabel
                className="rounded-start"
                controlId="floatingSelectGrid"
                label="Jumlah Penumpang"
              >
                <Form.Select
                  aria-label="Floating label select example"
                  className="border-0"
                >
                  <option>Penumpang</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
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
                >
                  <option>Penumpang</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col></Col>
          </Row>
          <div className="text-center">
            <Button className="">
              <a href="/list-ticket" className="px-4 text-white" style={{ textDecoration: 'none' }}>Cari Tiket</a>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}