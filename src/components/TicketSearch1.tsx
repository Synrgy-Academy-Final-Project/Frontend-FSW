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
import { useState } from "react";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import axios from "axios";
import DropdownPassenger from "./DropdownPassenger";

interface Option {
  value: string;
  label: string;
  detailLabel: string;
}

// Fungsi untuk mendapatkan data dari API
const getAirportData = async (): Promise<Option[]> => {
  try {
    const response = await axios.get(
      "https://fly-id-1999ce14c36e.herokuapp.com/airports"
    );
    const airportData = response.data.data.content;

    // Transformasi data dari API menjadi bentuk yang diinginkan
    const transformedData: Option[] = airportData.map((airport) => ({
      value: airport.airportCodeName,
      label: airport.airportCityCountry,
      detailLabel: airport.airportCode,
    }));

    return transformedData;
  } catch (error) {
    console.error("Error fetching airport data:", error);
    return [];
  }
};

const options: Option[] = await getAirportData();

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

  const [isReturnTicket, setIsReturnTicket] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsReturnTicket(event.target.checked);
    // Clear the return date when unchecking the checkbox
    if (!event.target.checked) {
      setReturnDate(null);
      setReturnDay("");
    }
  };

  const [selectedClass, setSelectedClass] = useState<string>("");

  const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(event.target.value.toLowerCase());
  };

  const handleSearch = async () => {
    if (selectedOriginOption && selectedDestinationOption && departureDate) {
      const departureCode = selectedOriginOption.value.toLowerCase();
      const arrivalCode = selectedDestinationOption.value.toLowerCase();
      const formattedDepartureDate = departureDate
        .toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, "-");

      const apiUrl = `https://fly-id-1999ce14c36e.herokuapp.com/scheduleflight/?departureCode=${departureCode}&arrivalCode=${arrivalCode}&departureDate=${formattedDepartureDate}&airplaneClass=${selectedClass}`;

      console.log("apiUrl : ", apiUrl);
      try {
        const response = await axios.get(apiUrl);
        const flightData = response.data;

        // Handle flightData (e.g., display it, store it in state, etc.)
        console.log("Flight Data:", flightData);
      } catch (error) {
        console.error("Error fetching flight data:", error);
      }
    } else {
      // Handle case where required fields are not selected
      console.log("Please select origin, destination, and departure date.");
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
              <Accordion defaultActiveKey="null" className="rounded-star">
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
                    <DropdownPassenger />
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
            <Button className="" onClick={handleSearch}>
              <span className="px-4 text-white">Cari Tiket</span>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}