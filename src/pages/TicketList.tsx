import CardTicket from "../components/CardTicket";
import DetailTicket from "../components/DetailTicket";
import FilterListTicket from "../components/FilterListTicket";
import Header from "../components/Header";

type Props = {};

const TicketList = (props: Props) => {
  return (
    <div>
      <Header label="LIST-TICKET" />
      <div className="d-flex">
        <div className="w-25">
          <FilterListTicket />
        </div>
        <div className="d-flex flex-column w-75">
          {[...Array(5)].map((item) => {
            return (
              <div>
                <DetailTicket />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TicketList;
