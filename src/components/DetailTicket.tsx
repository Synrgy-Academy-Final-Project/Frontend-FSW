import { Accordion, Card } from "react-bootstrap";
import "./DetailTicket.css";

export default function DetailTicket() {
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-9">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Card className="w-100 d-flex">
                <Card.Body>
                  <div className="row">
                    <div className="col text-center my-auto">
                      <div className="maskapai">
                        <img src="src/assets/images/XMLID_29_.png" alt="" />
                      </div>
                    </div>
                    <div className="col text-center my-auto">
                      <div className="titledesc">
                        <h6 className="sb-16-g">Keberangkatan</h6>
                      </div>
                      <div>
                        <h4 className="sb-20-b">20:15</h4>
                      </div>
                      <div className="date-detail">
                        <h5 className="r-16-b">4 Oktober 2023</h5>
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
                            x1="0"
                            y1="30%"
                            x2="100%"
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
                        <p className="r-14-g interval">2 j 0 m</p>
                      </div>
                    </div>
                    <div className="col text-center my-auto">
                      <div className="titledesc">
                        <h6 className="sb-16-g">Tiba</h6>
                      </div>
                      <div>
                        <h4 className="sb-20-b">20:15</h4>
                      </div>
                      <div className="date-detail">
                        <h5 className="r-16-b">4 Oktober 2023</h5>
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
                            <p className="b-24-p">Rp1.500.000</p>
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
                    <div className="row mt-3 mb-120">
                      <div className="time-detail">
                        <h4 className="sb-20-b">20:15</h4>
                      </div>
                      <div className="date-detail">
                        <h5 className="r-16-b">4 Oktober 2023</h5>
                      </div>
                    </div>
                    <div className="row mb-120">
                      <div className="time-detail-count">
                        <h4 className="sb-16-g">2 j 0 m</h4>
                      </div>
                      <div className="date-detail">
                        <h5 className="r-16-g">Non stop</h5>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="time-detail">
                        <h4 className="sb-20-b">20:15</h4>
                      </div>
                      <div className="date-detail">
                        <h5 className="r-16-b">4 Oktober 2023</h5>
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
                          right: "18%",
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
                          right: "18%",
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
                      <h4 className="sb-16-b">Jakarta (CGK)</h4>
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
                          />
                        </div>
                        <div className="col-11">
                          <p className="r-14-b my-2">
                            Bagasi kabin 1 item (7 kg)
                          </p>
                        </div>
                      </div>
                      <div className="row list-dp">
                        <div className="col-1 justify-content-center">
                          <img
                            src="src/assets/images/Shopping Bag.png"
                            alt=""
                          />
                        </div>
                        <div className="col-11">
                          <p className="r-14-b my-2">Bagasi 1 item (20 kg)</p>
                        </div>
                      </div>
                      <div className="row list-dp">
                        <div className="col-1 justify-content-center">
                          <img src="src/assets/images/Utensils.png" alt="" />
                        </div>
                        <div className="col-11">
                          <p className="r-14-b my-2">Makanan di pesawat</p>
                        </div>
                      </div>
                      <div className="row list-dp">
                        <div className="col-1 justify-content-center">
                          <img src="src/assets/images/File Minus.png" alt="" />
                        </div>
                        <div className="col-11">
                          <p className="r-14-g my-2">
                            Tanpa ansuransi perjalanan
                          </p>
                        </div>
                      </div>
                      <div className="row list-dp">
                        <div className="col-1 justify-content-center">
                          <img
                            src="src/assets/images/youtube square.png"
                            alt=""
                          />
                        </div>
                        <div className="col-11">
                          <p className="r-14-g my-2">Hiburan di pesawat</p>
                        </div>
                      </div>
                      <div className="row list-dp">
                        <div className="col-1 justify-content-center">
                          <img src="src/assets/images/usb.png" alt="" />
                        </div>
                        <div className="col-11">
                          <p className="r-14-g my-2">Stopkontak atau USB</p>
                        </div>
                      </div>
                      <div className="row list-dp">
                        <div className="col-1 justify-content-center">
                          <img src="src/assets/images/Wifi Slash.png" alt="" />
                        </div>
                        <div className="col-11">
                          <p className="r-14-g my-2">WiFi</p>
                        </div>
                      </div>
                      <div className="row list-dp">
                        <div className="col-1">
                          <img
                            src="src/assets/images/Calendar Alt.png"
                            alt=""
                          />
                        </div>
                        <div className="col-4">
                          <p className="r-14-s my-1">Bisa reschedule</p>
                        </div>
                        <div className="col-1">
                          <img
                            src="src/assets/images/Money Check Edit Alt.png"
                            alt=""
                          />
                        </div>
                        <div className="col-6">
                          <p className="r-14-s my-1">Bisa refund 83%</p>
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
                      <h4 className="sb-16-b">Bali (DPS)</h4>
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
      </div>
    </div>
  );
}
