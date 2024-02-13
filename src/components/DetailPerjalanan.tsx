import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./DetailPerjalanan.css";

const DetailPerjalanan = ({ penumpang, pesawat }) => {
  const formatDate = (dateTimeString: string) => {
    const departureDate = new Date(dateTimeString);
    const monthNames = new Intl.DateTimeFormat("id-ID", { month: "long" })
      .formatToParts(departureDate)
      .find((part) => part.type === "month").value;
    const day = departureDate.getDate();
    const year = departureDate.getFullYear();

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
    const durationInMilliseconds =
      arrivalDate.getTime() - departureDate.getTime();

    // Convert milliseconds to hours and minutes
    const durationInHours = Math.floor(
      durationInMilliseconds / (60 * 60 * 1000)
    );
    const durationInMinutes = Math.floor(
      (durationInMilliseconds % (60 * 60 * 1000)) / (60 * 1000)
    );

    return `${durationInHours} j ${durationInMinutes} m`;
  };
  return (
    <div className="mt-3">
      <Card className="card">
        <Card.Header className="d-flex align-items-center card-header">
          <img
            src={pesawat?.urlLogo} 
            alt="Logo pesawat"
            style={{ marginRight: "10px", maxWidth: "100px" }}
          />
          <span className="card-tittle fw-bold">{pesawat?.companyName}</span>
        </Card.Header>

        <Card.Body>
          <Row className="row-body text-center align-items-center ">
            <Col md={5}>
              <div className="text-body">
                <p>{formatDate(pesawat?.departureTime).formattedTime}</p>
                <p>{pesawat?.departureCityCode}</p>
                <p>{formatDate(pesawat?.departureTime).formattedDate}</p>
              </div>
            </Col>
            <Col md={2}>
              <div className="img">
                <p>
                  <img
                    src="./images/plane.png"
                    alt=""
                    style={{ width: "75%", height: "75%" }}
                  />
                </p>
              </div>
            </Col>
            <Col md={5}>
              <div className="text-body">
                <p>{formatDate(pesawat?.arrivalTime).formattedTime}</p>
                <p>{pesawat?.arrivalCityCode}</p>
                <p>{formatDate(pesawat?.arrivalTime).formattedDate}</p>
              </div>
            </Col>
          </Row>

          <Row className="row-list pt-3 px-4">
            <Col md={4}>
              <ul>
                <li>{penumpang} Penumpang</li>
              </ul>
            </Col>
            <Col md={4}>
              <ul>
                <li>{pesawat?.airplaneClass}</li>
              </ul>
            </Col>
            <Col md={4}>
              <ul>
                <li>{calculateDuration(pesawat?.departureTime, pesawat?.arrivalTime)}</li>
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetailPerjalanan;
