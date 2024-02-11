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
import { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";
import { BsPower } from "react-icons/bs";

interface User {
  firstName?: string;
  lastName?: string;
}

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
  } = useTicketSearch();

  const token = localStorage.getItem("token");
  const [user, setUser] = useState<User>(null);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>(""); // State for selectedTime
  const [amenities, setAmenities] = useState<Record<string, boolean>>({
    bagasi: false,
    hiburan: false,
    makanan: false,
    stopkontak: false,
    wifi: false,
  });
  const base_url = "https://fly-id-1999ce14c36e.herokuapp.com";
  const handleLogout = () => {
    // Hapus token dari local storage
    localStorage.removeItem("token");
    window.location.reload();
  };
  const label = "LIST-TICKET";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(base_url + "/user-detail/logged-in-user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 500) {
          localStorage.removeItem("token");
          throw new Error("Token tidak valid!");
        }

        const responseJson = await response.json();

        if (response.status === 200) {
          setUser({
            firstName: responseJson.data.usersDetails.firstName,
            lastName: responseJson.data.usersDetails.lastName,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (token) {
      fetchUser();
    }
  }, [token]);

  const [passengersData, setPassengersData] = useState([
    { type: "adult", count: 1 },
  ]);

  // Fungsi untuk menangani perubahan jumlah penumpang
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
    handleSearch("", {}, updatedPassengersData);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

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
          <DetailTicket
            tickets={currentTickets}
            passengersData={passengersData}
          />
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

  const handleDepartureTimeChange = (selectedTime, amenities) => {
    console.log("Waktu keberangkatan yang dipilih:", selectedTime, amenities);
    handleSearch(selectedTime, amenities, []);
  };

  const handleAmenitiesChange = (amenities, selectedTime) => {
    console.log("Fasilitas yang dipilih:", amenities, selectedTime);
    handleSearch(selectedTime, amenities, []);
  };

  // const passengersData = [];
  // const handlePassengerCountChange = (count: number, type: string) => {
  //   // Lakukan sesuatu dengan data jumlah penumpang dan typenya, misalnya simpan ke state atau lakukan operasi lain
  //   console.log(`Jumlah penumpang ${type}: ${count}`);
  //   if (count > 0) {
  //     passengersData.push({ type, count });
  //   }
  // };

  return (
    <div>
      {/* <Header label="LIST-TICKET" /> */}
      {/* Header */}
      <header>
        <div className="bg-plane">
          <nav>
            <ul className="nav-list">
              <li>
                <a
                  className={
                    window.location.pathname === "/"
                      ? "bg-white p-3 bg-opacity-50 rounded-4"
                      : ""
                  }
                  href="/"
                >
                  <span>Beranda</span>
                </a>
              </li>
              <li
                className={
                  window.location.pathname === "/list-ticket"
                    ? "bg-white p-3 bg-opacity-50 rounded-4"
                    : ""
                }
              >
                <a href="/list-ticket">
                  <span>Tiket Pesawat</span>
                </a>
              </li>
              <li
                className={
                  window.location.pathname === "/populerplaces"
                    ? "bg-white p-3 bg-opacity-50 rounded-4"
                    : ""
                }
              >
                <a href="/populerplaces">
                  <span>Tempat Populer</span>
                </a>
              </li>
              <li
                className={
                  window.location.pathname === "/aboutus"
                    ? "bg-white p-3 bg-opacity-50 rounded-4"
                    : ""
                }
              >
                <a href="/aboutus">
                  <span>Tentang Kami</span>
                </a>
              </li>
              <li className="ms-auto">
                {/* Tampilkan button Masuk atau Logout berdasarkan keberadaan token */}
                {token && user ? (
                  <div className="profile">
                    <div className="d-flex">
                      <span>{user.firstName}</span>
                      <i className="chevron-down" onClick={handleDropdown}></i>
                      <i className="user-avatar" onClick={handleDropdown}></i>
                    </div>
                    {dropdown && (
                      <div className="dropdown">
                        <div className="my-account">
                          <h5>Akun Saya</h5>
                          <div className="information">
                            <p>
                              <a href="/pesanan">Pesanan</a>
                            </p>
                            <p>Notifikasi Harga</p>
                            <p>Favorit</p>
                            <p>Data Penumpang Tersimpan</p>
                            <p>Ulasan</p>
                            <p>Profil</p>
                          </div>
                        </div>
                        <div className="my-account">
                          <h5>Pengaturan</h5>
                          <div className="information">
                            <p>Pengaturan Akun</p>
                            <p>Bahasa Indonesia</p>
                          </div>
                        </div>
                        <Button
                          variant="danger"
                          className="logout"
                          onClick={handleLogout}
                        >
                          <BsPower className="icon-power-off" />
                          Keluar
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="login bg-white bg-opacity-50 rounded-4"
                  >
                    <span>Masuk</span>
                  </Link>
                )}
              </li>
              <li className="register">
                {/* Tampilkan button Daftar atau tidak ada jika token ada */}
                {!token && <a href="/register">Daftar</a>}
              </li>
            </ul>
          </nav>
          <div className="title">
            {label === "LIST-TICKET" ? (
              <>
                <h1>TIKET PESAWAT</h1>
              </>
            ) : (
              <>
                <h1>Fly.id</h1>
                <h3 className="pb-5">
                  Dapatkan tiket terbaik untuk perjalanan Anda!
                </h3>
              </>
            )}
            {/* TicketSearch */}
            <div>
              <div className="card-search">
                <Form>
                  <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
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
                        <span className="placeholder-field">
                          Tanggal pulang
                        </span>
                        <DatePicker
                          selected={returnDate}
                          onChange={handleReturnDateChange}
                          className="border-0 date-end"
                          placeholderText="Pilih tanggal"
                          disabled={!isReturnTicket}
                        />
                        {returnDate && (
                          <p className="detail-date">{`${ReturnDay}`}</p>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3 pt-2">
                    <Col></Col>
                    <Col className="pe-0">
                      <Accordion
                        defaultActiveKey="null"
                        className="rounded-star"
                      >
                        <Accordion.Item
                          eventKey="0"
                          className="d-flex flex-column border-0"
                        >
                          <AccordionHeader className="p-0 justify-content-between ">
                            <div className="d-flex flex-column mt-1 pt-2 ms-3">
                              <p className="accordeoon-label">
                                Jumlah Penumpang
                              </p>
                            </div>
                            <div className="d-flex position-absolute flex-column pt-4 mt-2 ms-3">
                              <p>Penumpang</p>
                            </div>
                          </AccordionHeader>
                          <Accordion.Body className="p-0">
                            <DropdownPassenger
                              onChangeCount={(count, type) =>
                                handlePassengerCountChange(count, type)
                              }
                            />
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
                          <option value="Premium Economy">
                            Premium Ekonomi
                          </option>
                          <option value="Business">Bisnis</option>
                          <option value="First Class">Kelas Utama</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                    <Col></Col>
                  </Row>
                  <div className="text-center">
                    <Button
                      className=""
                      onClick={() => handleSearch("", {}, [])}
                    >
                      <span className="px-4 text-white">Cari Tiket</span>
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
            {/* End TicketSearch */}
          </div>
        </div>
      </header>
      {/* End HEader */}
      <div className="container">
        <div className="row my-5">
          <div className="col-4">
            <FilterListTicket
              onDepartureTimeChange={handleDepartureTimeChange}
              onAmenitiesChange={handleAmenitiesChange}
            />
          </div>
          <div className="col-8">{renderContent()}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
