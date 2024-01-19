import CardTicket from "../components/CardTicket";
import FilterListTicket from "../components/FilterListTicket";

type Props = {};

const TicketList = (props: Props) => {
  return (
    <div className="d-flex">
      <div className="w-25">
        <FilterListTicket />
      </div>
      <div className="d-flex flex-column w-75">
        {[...Array(5)].map((item) => {
          return (
            <div>
              <CardTicket />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicketList;
