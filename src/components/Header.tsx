import "./Header.css";
import TicketSearch from "./TicketSearch";
import Navbar from "./Navbar";
interface Header {
  label?: string;
}
interface User {
  firstName?: string;
  lastName?: string;
}

export default function Header(props) {
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
              <h3 className="pb-5">
                Dapatkan tiket terbaik untuk perjalanan Anda!
              </h3>
            </>
          )}
          <TicketSearch></TicketSearch>
        </div>
      </div>
    </header>
  );
}
