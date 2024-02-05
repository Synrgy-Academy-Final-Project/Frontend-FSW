import { Accordion, Card, Container } from "react-bootstrap";
import "./DetailTicket.css";
import { ITickets } from "../services/types";

const formatDate = (dateTimeString: string) => {
  const departureDate = new Date(dateTimeString);
  const monthNames = new Intl.DateTimeFormat("id-ID", { month: "long" })
    .formatToParts(departureDate)
    .find((part) => part.type === "month").value;
  const day = departureDate.getDate();
  const year = departureDate.getFullYear();

  // Extract hour and minute from departureTime
  const hour = departureDate.getHours();
  const minute = departureDate.getMinutes();

  return {
    formattedDate: `${day} ${monthNames} ${year}`,
    formattedTime: `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`,
  };
};

const calculateDuration = (departureTime: string, arrivalTime: string) => {
  const departureDate = new Date(departureTime);
  const arrivalDate = new Date(arrivalTime);

  // Calculate the difference in milliseconds
  const durationInMilliseconds = arrivalDate - departureDate;

  // Convert milliseconds to hours and minutes
  const durationInHours = Math.floor(durationInMilliseconds / (60 * 60 * 1000));
  const durationInMinutes = Math.floor(
    (durationInMilliseconds % (60 * 60 * 1000)) / (60 * 1000)
  );

  return `${durationInHours} j ${durationInMinutes} m`;
};

const formatPrice = (price: number) => {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);

  return formattedPrice;
};

const DetailTicket = ({ tickets }) => {
  console.log("tick : ", tickets);
  return (
    <div>
      {tickets?.map((record: ITickets) => (
        <Accordion className="mb-3">
          <Accordion.Item eventKey={record.airplaneId}>
            <Accordion.Header>
              <Card className="w-100 d-flex">
                <Card.Body>
                  <div className="row">
                    <div className="col text-center my-auto">
                      <div className="maskapai">
                        <img src={record.urlLogo} width={"120px"} alt="" />
                      </div>
                    </div>
                    <div className="col text-center my-auto">
                      <div className="titledesc">
                        <h6 className="sb-16-g">Keberangkatan</h6>
                      </div>
                      <div>
                        <h4 className="sb-20-b">
                          {formatDate(record.departureTime).formattedTime}
                        </h4>
                      </div>
                      <div className="date-detail">
                        <h5 className="r-16-b">
                          {formatDate(record.departureTime).formattedDate}
                        </h5>
                      </div>
                    </div>
                    <div className="col my-3">
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "80px",
                        }}
                      >
                        <svg
                          height="50"
                          width="50"
                          style={{
                            position: "absolute",
                            left: "0%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <circle cx="50%" cy="50%" r="4" fill="#007BFF" />
                        </svg>
                        <svg
                          height="80"
                          width="180"
                          style={{
                            position: "absolute",
                            left: "50%",
                            top: "100%",
                            transform: "translate(-50%, -80%)",
                          }}
                        >
                          <line
                            x1="20%"
                            y1="30%"
                            x2="80%"
                            y2="30%"
                            stroke="#007BFF"
                            strokeWidth="2"
                            strokeDasharray="5"
                          />
                        </svg>
                        <svg
                          height="50"
                          width="50"
                          style={{
                            position: "absolute",
                            right: "0%",
                            top: "50%",
                            transform: "translate(50%, -50%)",
                          }}
                        >
                          <circle cx="50%" cy="50%" r="4" fill="#007BFF" />
                        </svg>
                        <img
                          src="src/assets/images/Plane.png"
                          alt=""
                          className="icon-plane"
                        />
                        <p className="r-14-g interval">
                          {calculateDuration(
                            record.departureTime,
                            record.arrivalTime
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="col text-center my-auto">
                      <div className="titledesc">
                        <h6 className="sb-16-g">Tiba</h6>
                      </div>
                      <div>
                        <h4 className="sb-20-b">
                          {formatDate(record.arrivalTime).formattedTime}
                        </h4>
                      </div>
                      <div className="date-detail">
                        <h5 className="r-16-b">
                          {formatDate(record.arrivalTime).formattedDate}
                        </h5>
                      </div>
                    </div>
                    <div className="col-1" style={{ width: "10px" }}>
                      <svg
                        height="110"
                        width="10"
                        style={{
                          position: "relative",
                          left: "-16",
                          transform: "translate(0%, 0%)",
                        }}
                      >
                        <line
                          x1="0"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                          stroke="#E0E0E0"
                          strokeWidth="4"
                          strokeDasharray="10"
                        />
                      </svg>
                    </div>
                    <div className="col">
                      <div className="my-3">
                        <div className="row">
                          <span className="d-flex">
                            <p className="b-24-p">
                              {formatPrice(record.totalPrice)}
                            </p>
                            <p className="sb-16-g mt-2 pt-1">/org</p>
                          </span>
                        </div>
                        <div className="row">
                          <div className="d-grid gap-2">
                            <button
                              className=" button-primary-small"
                              type="button"
                            >
                              Pilih
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Accordion.Header>
            <Accordion.Body>
              <div className="border-detail">
                <div className="row">
                  <div className="col-2 text-center">
                    <div className="row mt-3 mb-80">
                      <div className="time-detail">
                        <h4 className="sb-20-b">
                          {formatDate(record.departureTime).formattedTime}
                        </h4>
                      </div>
                      <div className="date-detail">
                        <h5 className="r-16-b">
                          {formatDate(record.departureTime).formattedDate}
                        </h5>
                      </div>
                    </div>
                    <div className="row mb-80">
                      <div className="time-detail-count">
                        <h4 className="sb-16-g">
                          {calculateDuration(
                            record.departureTime,
                            record.arrivalTime
                          )}
                        </h4>
                      </div>
                      <div className="date-detail">
                        <h5 className="r-16-g">Non stop</h5>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="time-detail">
                        <h4 className="sb-20-b">
                          {formatDate(record.arrivalTime).formattedTime}
                        </h4>
                      </div>
                      <div className="date-detail">
                        <h5 className="r-16-b">
                          {formatDate(record.arrivalTime).formattedDate}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-1">
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "80px",
                      }}
                    >
                      <svg
                        height="50"
                        width="50"
                        style={{
                          position: "absolute",
                          right: "5%",
                          top: "50%",
                          transform: "translate(-24%, -40%)",
                        }}
                      >
                        <circle cx="50%" cy="50%" r="4" fill="#007BFF" />
                      </svg>
                      <svg
                        height="370"
                        width="180"
                        style={{
                          position: "absolute",
                          left: "50%",
                          top: "70%",
                          transform: "translate(-10%, 0%)",
                        }}
                      >
                        <line
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="100%"
                          stroke="#007BFF"
                          strokeWidth="2"
                          strokeDasharray="5"
                        />
                      </svg>
                      <svg
                        height="50"
                        width="50"
                        style={{
                          position: "absolute",
                          right: "5%",
                          top: "100%",
                          transform: "translate(-24%, 630%)",
                        }}
                      >
                        <circle cx="50%" cy="50%" r="4" fill="#007BFF" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="title-dp">
                      <h4 className="sb-16-b">{record.departureCityCode}</h4>
                      <p className="r-14-g mb-1">
                        Soekarno Hatta International Airport
                      </p>
                    </div>
                    <svg height="2" width="480">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        stroke="#E0E0E0"
                        strokeWidth="4"
                        strokeDasharray="20"
                      />
                    </svg>
                    <div className="content-dp">
                      <div className="row list-dp">
                        <div className="col-1 justify-content-center">
                          <img
                            src="src/assets/images/Shopping Bag.png"
                            alt=""
                            className="pt-1"
                          />
                        </div>
                        <div className="col-11">
                          <p className="r-14-b my-2">
                            Bagasi kabin 1 item (
                            {record.airplaneServices.cabinBaggage} kg)
                          </p>
                        </div>
                      </div>
                      <div className="row list-dp">
                        <div className="col-1 justify-content-center">
                          <img
                            src="src/assets/images/Shopping Bag.png"
                            alt=""
                            className="pt-1"
                          />
                        </div>
                        <div className="col-11">
                          <p className="r-14-b my-2">
                            Bagasi 1 item ({record.airplaneServices.baggage} kg)
                          </p>
                        </div>
                      </div>
                      <div className="row list-dp">
                        <div className="col-1 justify-content-center">
                          <img
                            src="src/assets/images/Utensils.png"
                            alt=""
                            className="pt-1"
                          />
                        </div>
                        <div className="col-11">
                          <p
                            className={
                              record.airplaneServices.meals
                                ? "r-14-b my-2"
                                : "r-14-g my-2"
                            }
                          >
                            Makanan di pesawat
                          </p>
                        </div>
                      </div>
                      <div className="row list-dp">
                        <div className="col-1 justify-content-center">
                          <img
                            src="src/assets/images/File Minus.png"
                            alt=""
                            className="pt-1"
                          />
                        </div>
                        <div className="col-11">
                          <p
                            className={
                              record.airplaneServices.travelInsurance
                                ? "r-14-b my-2"
                                : "r-14-g my-2"
                            }
                          >
                            {record.airplaneServices.travelInsurance
                              ? "Dengan "
                              : "Tanpa "}
                            ansuransi perjalanan
                          </p>
                        </div>
                      </div>
                      <div className="row list-dp">
                        <div className="col-1 justify-content-center">
                          <img
                            src="src/assets/images/youtube square.png"
                            alt=""
                            className="pt-1"
                          />
                        </div>
                        <div className="col-11">
                          <p
                            className={
                              record.airplaneServices.inflightEntertainment
                                ? "r-14-b my-2"
                                : "r-14-g my-2"
                            }
                          >
                            Hiburan di pesawat
                          </p>
                        </div>
                      </div>
                      <div className="row list-dp">
                        <div className="col-1 justify-content-center">
                          <img
                            src="src/assets/images/usb.png"
                            alt=""
                            className="pt-1"
                          />
                        </div>
                        <div className="col-11">
                          <p
                            className={
                              record.airplaneServices.electricSocket
                                ? "r-14-b my-2"
                                : "r-14-g my-2"
                            }
                          >
                            Stopkontak atau USB
                          </p>
                        </div>
                      </div>
                      <div className="row list-dp">
                        <div className="col-1 justify-content-center">
                          <img
                            src="src/assets/images/Wifi Slash.png"
                            alt=""
                            className="pt-1"
                          />
                        </div>
                        <div className="col-11">
                          <p
                            className={
                              record.airplaneServices.wifi
                                ? "r-14-b my-2"
                                : "r-14-g my-2"
                            }
                          >
                            WiFi
                          </p>
                        </div>
                      </div>
                      <div className="row list-dp">
                        <div className="col-1">
                          <img
                            src="src/assets/images/Calendar Alt.png"
                            alt=""
                            className="pt-1"
                          />
                        </div>
                        <div className="col-4">
                          <p
                            className={
                              record.airplaneServices.reschedule
                                ? "r-14-s my-1"
                                : "r-14-g my-1"
                            }
                          >
                            {record.airplaneServices.reschedule
                              ? "Bisa "
                              : "Tidak bisa "}
                            reschedule
                          </p>
                        </div>
                        <div className="col-1">
                          <img
                            src="src/assets/images/Money Check Edit Alt.png"
                            alt=""
                          />
                        </div>
                        <div className="col-6">
                          <p className="r-14-s my-1">
                            Bisa refund {record.airplaneServices.refund}%
                          </p>
                        </div>
                      </div>
                    </div>
                    <svg height="2" width="480">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        stroke="#E0E0E0"
                        strokeWidth="4"
                        strokeDasharray="20"
                      />
                    </svg>
                    <div className="title-dp">
                      <h4 className="sb-16-b">{record.arrivalCityCode}</h4>
                      <p className="r-14-g">
                        I Gusti Ngurah Rai International Airport
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};

export default DetailTicket;
