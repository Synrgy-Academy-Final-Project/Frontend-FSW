// import { CircularProgress, Pagination, Stack } from "@mui/material";
// import DetailTicket from "../../../components/DetailTicket";
// import FilterListTicket from "../../../components/FilterListTicket";
// import useTicketSearch from "./TicketList.Hooks";
// import {
//   Accordion,
//   AccordionHeader,
//   Button,
//   Col,
//   FloatingLabel,
//   Form,
//   Row,
// } from "react-bootstrap";
// import Select from "react-select";
// import { HiOutlineSwitchHorizontal } from "react-icons/hi";
// import DatePicker from "react-datepicker";
// import DropdownPassenger from "../../../components/DropdownPassenger";
// import MinimumPrice from "../../../components/MinPrice";
// import { useState } from "react";
// import Footer from "../../../components/Footer";

// const customStylesStart = {
//   control: (provided) => ({
//     ...provided,
//     position: "relative",
//     border: "none",
//     padding: "20px 0 0 10px",
//     borderRadius: "0.75rem 0 0 0.75rem",
//     height: "110px",
//     "&:hover": {
//       borderBottom: "none !important", // Remove the hover border
//     },
//   }),
//   indicatorSeparator: (provided) => ({
//     ...provided,
//     display: "none", // Remove the vertical separator
//   }),
//   dropdownIndicator: (provided) => ({
//     ...provided,
//     display: "none", // Remove the dropdown indicator
//   }),
//   placeholder: (provided) => ({
//     ...provided,
//     fontSize: "24px",
//     color: "black",
//     fontWeight: "bold",
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.isSelected ? "#3E7BFA" : "white",
//     color: state.isSelected ? "white" : "black",
//     "&:hover": {
//       backgroundColor: "",
//     },
//   }),
// };

// const customStylesEnd = {
//   control: (provided) => ({
//     ...provided,
//     position: "relative",
//     border: "none",
//     padding: "20px 0 0 20px",
//     borderRadius: "0rem 0.75rem 0.75rem 0rem",
//     height: "110px",
//     "&:hover": {
//       borderBottom: "none !important", // Remove the hover border
//     },
//   }),
//   indicatorSeparator: (provided) => ({
//     ...provided,
//     display: "none", // Remove the vertical separator
//   }),
//   dropdownIndicator: (provided) => ({
//     ...provided,
//     display: "none", // Remove the dropdown indicator
//   }),
//   placeholder: (provided) => ({
//     ...provided,
//     fontSize: "24px",
//     color: "black",
//     fontWeight: "bold",
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.isSelected ? "#3E7BFA" : "white",
//     color: state.isSelected ? "white" : "black",
//     "&:hover": {
//       backgroundColor: "",
//     },
//   }),
// };

// export default function TicketList() {
//   const {
//     options,
//     isReturnTicket,
//     selectedOriginOption,
//     selectedDestinationOption,
//     departureDate,
//     returnDate,
//     DepartureDay,
//     ReturnDay,
//     handleOriginChange,
//     handleDestinationChange,
//     handleDepartureDateChange,
//     handleReturnDateChange,
//     handleSwitch,
//     handleCheckboxChange,
//     handleClassChange,
//     handleSearch,
//     loading,
//     tickets,
//     minprice,
//     // Other state variables and functions from useTicketSearch...
//   } = useTicketSearch();

//   const token = localStorage.getItem("token");
//   const handleLogout = () => {
//     // Hapus token dari local storage
//     localStorage.removeItem("token");
//     window.location.reload();
//   };
//   const label = "LIST-TICKET";

//   const renderLoading = () => {
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "1rem 0",
//         }}
//       >
//         <CircularProgress />
//       </div>
//     );
//   };

//   const isOptionsSelected = selectedOriginOption && selectedDestinationOption;

//   const [currentPage, setCurrentPage] = useState<number>(1);

//   const renderContent = () => {
//     if (loading) {
//       return renderLoading();
//     }

//     if (!isOptionsSelected) {
//       // Tampilkan pesan bahwa asal dan tujuan harus dipilih
//       return (
//         <div className="text-center">
//           <p className="fs-6 text-secondary">Pilih Rute Penerbangan Anda</p>
//         </div>
//       );
//     }

//     const itemsPerPage = 5; // Change this according to your needs
//     const indexOfLastTicket = currentPage * itemsPerPage;
//     const indexOfFirstTicket = indexOfLastTicket - itemsPerPage;
//     const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);

//     return (
//       <>
//         <div className="mb-3">
//           <MinimumPrice minprice={minprice} />
//         </div>
//         <div>
//           <p className="fs-6">
//             kami memiliki{" "}
//             <span className="fw-bold text-black fs-6">{tickets.length}</span>{" "}
//             ticket dari{" "}
//             <span className="fw-bold text-black fs-6">
//               {selectedOriginOption.label}
//             </span>{" "}
//             ke{" "}
//             <span className="fw-bold text-black fs-6">
//               {selectedDestinationOption.label}
//             </span>
//           </p>
//         </div>
//         <div>
//           <DetailTicket tickets={currentTickets} />
//           <Stack spacing={2}>
//             <Pagination
//               count={Math.ceil(tickets.length / itemsPerPage)}
//               page={currentPage}
//               onChange={(event, value) => setCurrentPage(value)}
//             />
//           </Stack>
//         </div>
//       </>
//     );
//   };

//   const formatOptionLabel = ({ label, detailLabel }) => (
//     <div>
//       <strong style={{ fontSize: "24px", lineHeight: "40px" }}>{label}</strong>
//       <br />
//       <span style={{ fontSize: "16px", color: "gray", lineHeight: "2px" }}>
//         {" "}
//         {detailLabel}
//       </span>
//     </div>
//   );

//   return (
//     <div>
//       {/* <Header label="LIST-TICKET" /> */}
//       {/* Header */}
//       <header>
//         <div className="bg-plane">
//           <nav>
//             <ul className="nav-list">
//               <li>
//                 <a
//                   className={
//                     window.location.pathname === "/"
//                       ? "bg-white p-3 bg-opacity-50 rounded-4"
//                       : ""
//                   }
//                   href="/"
//                 >
//                   <span>Beranda</span>
//                 </a>
//               </li>
//               <li
//                 className={
//                   window.location.pathname === "/list-ticket"
//                     ? "bg-white p-3 bg-opacity-50 rounded-4"
//                     : ""
//                 }
//               >
//                 <a href="/list-ticket">
//                   <span>Tiket Pesawat</span>
//                 </a>
//               </li>
//               <li
//                 className={
//                   window.location.pathname === "/populerplaces"
//                     ? "bg-white p-3 bg-opacity-50 rounded-4"
//                     : ""
//                 }
//               >
//                 <a href="/populerplaces">
//                   <span>Tempat Populer</span>
//                 </a>
//               </li>
//               <li
//                 className={
//                   window.location.pathname === "/aboutus"
//                     ? "bg-white p-3 bg-opacity-50 rounded-4"
//                     : ""
//                 }
//               >
//                 <a href="/aboutus">
//                   <span>Tentang Kami</span>
//                 </a>
//               </li>
//               <li className="ms-auto">
//                 {/* Tampilkan button Masuk atau Logout berdasarkan keberadaan token */}
//                 {token ? (
//                   <button className="logout" onClick={handleLogout}>
//                     Logout
//                   </button>
//                 ) : (
//                   <a
//                     className="login bg-white bg-opacity-50 rounded-4"
//                     href="/login"
//                   >
//                     <span>Masuk</span>
//                   </a>
//                 )}
//               </li>
//               <li className="register">
//                 {/* Tampilkan button Daftar atau tidak ada jika token ada */}
//                 {!token && <a href="/register">Daftar</a>}
//               </li>
//             </ul>
//           </nav>
//           <div className="title">
//             {label === "LIST-TICKET" ? (
//               <>
//                 <h1>TIKET PESAWAT</h1>
//               </>
//             ) : (
//               <>
//                 <h1>Fly.id</h1>
//                 <h3 className="pb-5">
//                   Dapatkan tiket terbaik untuk perjalanan Anda!
//                 </h3>
//               </>
//             )}
//             {/* TicketSearch */}
//             <div>
//               <div className="card-search">
//                 <Form>
//                   <Row>
//                     <Col></Col>
//                     <Col></Col>
//                     <Col></Col>
//                     <Col>
//                       <Form.Group
//                         className="mb-3"
//                         controlId="formBasicCheckbox"
//                       >
//                         <Form.Check
//                           type="checkbox"
//                           label="Tiket Pulang?"
//                           onChange={handleCheckboxChange}
//                         />
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row className="mx-3 mb-3">
//                     <Col className="pe-0 form-position">
//                       <div className="border-field-start">
//                         <span className="placeholder-field">Asal</span>
//                         <Select
//                           options={options}
//                           value={selectedOriginOption}
//                           onChange={handleOriginChange}
//                           styles={customStylesStart}
//                           placeholder="Masukkan Asal"
//                           formatOptionLabel={formatOptionLabel}
//                         />
//                       </div>
//                     </Col>
//                     <Col className="ps-0 pe-1">
//                       <Button className="switch-button" onClick={handleSwitch}>
//                         <HiOutlineSwitchHorizontal />
//                       </Button>
//                       <div className="border-field-end">
//                         <span className="placeholder-field ms-2">Tujuan</span>
//                         <Select
//                           options={options}
//                           value={selectedDestinationOption}
//                           onChange={handleDestinationChange}
//                           styles={customStylesEnd}
//                           placeholder="Masukkan Tujuan"
//                           formatOptionLabel={formatOptionLabel}
//                         />
//                       </div>
//                     </Col>
//                     <Col className="pe-0 ps-1">
//                       <div className="border-field-start">
//                         <span className="placeholder-field">Tanggal pergi</span>
//                         <DatePicker
//                           selected={departureDate}
//                           onChange={handleDepartureDateChange}
//                           className="border-0 date-start"
//                           placeholderText="Pilih tanggal"
//                         />
//                         {departureDate && (
//                           <p className="detail-date">{`${DepartureDay}`}</p>
//                         )}
//                       </div>
//                     </Col>
//                     <Col className="ps-0">
//                       <div className="border-field-end">
//                         <span className="placeholder-field">
//                           Tanggal pulang
//                         </span>
//                         <DatePicker
//                           selected={returnDate}
//                           onChange={handleReturnDateChange}
//                           className="border-0 date-end"
//                           placeholderText="Pilih tanggal"
//                           disabled={!isReturnTicket}
//                         />
//                         {returnDate && (
//                           <p className="detail-date">{`${ReturnDay}`}</p>
//                         )}
//                       </div>
//                     </Col>
//                   </Row>
//                   <Row className="mb-3 pt-2">
//                     <Col></Col>
//                     <Col className="pe-0">
//                       <Accordion
//                         defaultActiveKey="null"
//                         className="rounded-star"
//                       >
//                         <Accordion.Item
//                           eventKey="0"
//                           className="d-flex flex-column border-0"
//                         >
//                           <AccordionHeader className="p-0 justify-content-between ">
//                             <div className="d-flex flex-column mt-1 pt-2 ms-3">
//                               <p className="accordeoon-label">
//                                 Jumlah Penumpang
//                               </p>
//                             </div>
//                             <div className="d-flex position-absolute flex-column pt-4 mt-2 ms-3">
//                               <p>Penumpang</p>
//                             </div>
//                           </AccordionHeader>
//                           <Accordion.Body className="p-0">
//                             <DropdownPassenger />
//                           </Accordion.Body>
//                         </Accordion.Item>
//                       </Accordion>
//                     </Col>
//                     <Col className="ps-0 border-r">
//                       <FloatingLabel
//                         className="rounded-end"
//                         controlId="floatingSelectGrid"
//                         label="Kelas"
//                       >
//                         <Form.Select
//                           aria-label="Floating label select example"
//                           className="border-0"
//                           onChange={handleClassChange}
//                         >
//                           <option>Kelas</option>
//                           <option value="Economy">Ekonomi</option>
//                           <option value="Premium Economy">
//                             Premium Ekonomi
//                           </option>
//                           <option value="Business">Bisnis</option>
//                           <option value="First Class">Kelas Utama</option>
//                         </Form.Select>
//                       </FloatingLabel>
//                     </Col>
//                     <Col></Col>
//                   </Row>
//                   <div className="text-center">
//                     <Button className="" onClick={handleSearch}>
//                       <span className="px-4 text-white">Cari Tiket</span>
//                     </Button>
//                   </div>
//                 </Form>
//               </div>
//             </div>
//             {/* End TicketSearch */}
//           </div>
//         </div>
//       </header>
//       {/* End HEader */}
//       <div className="container">
//         <div className="row my-5">
//           <div className="col-4">
//             <FilterListTicket />
//           </div>
//           <div className="col-8">{renderContent()}</div>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// }
