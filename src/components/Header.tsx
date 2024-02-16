import "./Header.css";
import TicketSearch from "./TicketSearch";
import Navbar from "./Navbar";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
interface Header {
  label?: string;
}
interface User {
  firstName?: string;
  lastName?: string;
}
const BlueButton = styled.button`
  width : 18%;
  background-color: var(--blue);
  color: var(--neutral01);
  padding: 0.6rem 1rem;
  font: var(--fwbold) 16px/105% Open Sans, sans-serif;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--lightblue);
  }
`;

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <header>
      <div className="bg-plane">
        <Navbar />
        <div className="title">
          {props.label === "LIST-TICKET" ? (
            <>
              <h1>TIKET PESAWAT</h1>
            </>
          ) : (
            <>
              <h1>Fly.id</h1>
              <h4 className="pt-3 pb-1 ">
                Dapatkan tiket terbaik untuk perjalanan Anda! <br />
              </h4>
              <h4 className="pb-3">
                Cari tiketmu sekarang juga
              </h4>
            </>
          )}
          <BlueButton
            className="mt-3"
            onClick={() => navigate("/list-ticket")}
          >
            Cari Tiket
            <svg
              width="38"
              height="38"
              viewBox="0 0 24 24"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              className="ps-2"
            >
              <path
                d="M21.5 18.5H2.5C2.21875 18.5 2 18.75 2 19V19.5C2 19.7812 2.21875 20 2.5 20H21.5C21.75 20 22 19.7812 22 19.5V19C22 18.75 21.75 18.5 21.5 18.5ZM4.3125 15.5C4.59375 15.8125 5 16 5.4375 16H9.34375C9.71875 16 10.0938 15.9062 10.4375 15.7188L19.1875 11.0938C20.125 10.5938 20.875 9.90625 21.4062 9.09375C22 8.125 22.125 7.28125 21.8125 6.59375C21.5 5.90625 20.75 5.53125 19.6562 5.4375C19.5625 5.4375 19.4688 5.4375 19.375 5.4375C18.5312 5.4375 17.6562 5.65625 16.8125 6.09375L14.0625 7.5625H14.0312L7.75 5.125C7.59375 5.0625 7.40625 5.03125 7.21875 5.03125C6.9375 5.03125 6.71875 5.09375 6.5 5.1875L5.375 5.78125C4.90625 6.03125 4.59375 6.53125 4.59375 7.09375C4.59375 7.625 4.84375 8.09375 5.25 8.375L8.5 10.5H8.53125H8.5L6.40625 11.5938L4.6875 10.7188C4.46875 10.5938 4.25 10.5312 4 10.5312C3.75 10.5312 3.5 10.5938 3.28125 10.7188L2.78125 10.9688C2.375 11.1875 2.09375 11.5625 2 12.0312C2 12.125 1.96875 12.2188 1.96875 12.3125C1.96875 12.6875 2.125 13.0312 2.375 13.2812L4.3125 15.5ZM4 12.0312L6.40625 13.3125L11.4688 10.625L6.09375 7.09375L7.21875 6.5L14.125 9.21875L17.5312 7.4375C18.1562 7.09375 18.7812 6.9375 19.375 6.9375C19.4375 6.9375 19.5 6.9375 19.5625 6.9375C20.0312 6.96875 20.4062 7.09375 20.4688 7.21875C20.5312 7.375 20.4688 7.71875 20.125 8.3125C19.75 8.90625 19.1875 9.40625 18.5 9.78125L9.71875 14.4062C9.59375 14.4688 9.46875 14.5 9.3125 14.5H5.4375L3.5 12.3125L4 12.0312Z"
                fill="#ffffff"
              />
            </svg>
          </BlueButton>

          {/* <TicketSearch></TicketSearch> */}
        </div>
      </div>
    </header>
  );
}
