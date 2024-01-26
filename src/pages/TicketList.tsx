import CardTicket from "../components/CardTicket";
import FilterListTicket from "../components/FilterListTicket";
import SearchTicket from "../components/SearchTicket";

type Props = {};

const TicketList = (props: Props) => {
  return (
    <div>
      <div className="container border border-2 p-3 m-3 rounded-2 mx-auto">
        <SearchTicket onSearch={() => console.log("test")} />
      </div>
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
    </div>
  );
};

export default TicketList;
