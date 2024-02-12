// import { useState } from "react";
// import CardTicket from "../../components/CardTicket";
// import DetailTicket from "../../components/DetailTicket";
// import FilterListTicket from "../../components/FilterListTicket";
// import Header from "../../components/Header";
// import Slider from "react-slick";
// import DropdownClass from "../../components/DropdownClass";
// import styled from 'styled-components';
// import {
//   Accordion,
//   AccordionHeader,
//   Button,
//   Col,
//   FloatingLabel,
//   Form,
//   Row,
// } from "react-bootstrap";
// interface IFlightsDate {
//   id: number;
//   date: string;
//   price: string;
// }
// const flights = [
//   { id: 1, date: 'Rab, 4 Okt', price: 'Rp1.000.000' },
//   { id: 2, date: 'Kam, 5 Okt', price: 'Rp900.000' },
//   { id: 3, date: 'Jum, 6 Okt', price: 'Rp950.000' },
//   { id: 4, date: 'Sab, 7 Okt', price: 'Rp900.000' },
//   { id: 5, date: 'Min, 8 Okt', price: 'Rp900.000' },
//   { id: 6, date: 'Sen, 9 Okt', price: 'Rp900.000' },
//   { id: 7, date: 'Sel, 10 Okt', price: 'Rp900.000' },
// ];

// const TicketList = () => {
//   const [selectedDateSlider, setSelectedDateSlider] = useState<IFlightsDate | null>(null)
//   const settings = {
//     infinite: true,
//     dots: false,
//     speed: 1000,
//     slidesToShow: 5,
//     slidesToScroll: 5,

//   };
//   const onSelectDateOptionSlider = (id) => {
//     const findData = flights.find(item => item.id === id)
//     setSelectedDateSlider(findData)
//     console.log(findData, 'data')
//   }
//   return (
//     <div >
//       <div >
//         <Header label="LIST-TICKET" />

//       </div>
//       <div className="row" style={{ width: '85%', margin: '1rem auto' }}>

//         <div className="col-3">
//           <FilterListTicket />
//         </div>
//         <div className="col-9" >
//           <div >
//             <Slider {...settings} style={{ width: '100%' }}>
//               {flights.map((item) => {
//                 return (
//                   <div key={item.id} onClick={() => onSelectDateOptionSlider(item.id)}
//                   >
//                     <h6 className="text-muted"
//                       style={{
//                         color: selectedDateSlider?.id === item.id ? 'blue' : '',
//                         borderBottom: selectedDateSlider?.id === item.id ? '5px solid blue' : '',
//                         borderRadius: 10, padding: 10, cursor: 'pointer',
//                       }}
//                     >{item.date}- <br />  {item.price}
//                     </h6>
//                   </div>
//                 )
//               })}
//             </Slider>
//           </div>
//           <div className="d-flex justify-content-between">
//             <h6 className="my-3">Kami memiliki <strong>4 ticket</strong> dari <strong>Jakarta</strong> ke <strong>Bali</strong></h6>
//             <div className="d-flex" style={{ justifyContent: 'center', alignItems: 'center', }}>
//               <h6 className="mr-5 pr-5" style={{ marginRight: '1rem' }}>
//                 Urut Berdasarkan
//               </h6>
//               <div
//                 style={{ width: '80%' }}
//               >
//                 <Form.Select
//                   aria-label="Floating label select example"
//                   className="border-0"
//                 >
//                   <option>Harga Termurah</option>
//                   <option value="1">Harga Termahal</option>
//                   <option value="3">Reset</option>
//                 </Form.Select>
//               </div>
//             </div>
//           </div>

//           {[...Array(5)].map((item, index) => (
//             <div key={index}>
//               <DetailTicket />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TicketList;
