import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./DetailPerjalanan.css";

const DetailPerjalanan = () => {
  return (
    <div>
      <Container fluid className="mt-5">
        <Card className="card">
          <Card.Header className="d-flex align-items-center card-header">
            <img
              src="https://i.ibb.co/NZqz2Qb/Garuda-logo.png" //
              alt="Logo Garuda Indonesia"
              style={{ marginRight: "10px", maxWidth: "100px" }}
            />
            <span className="card-tittle fw-bold">Garuda Indonesia</span>
          </Card.Header>

          <Card.Body>
            <Row className="row-body text-center align-items-center ">
              <Col md={5}>
                <div className="text-body">
                  <p>20:15</p>
                  <p>Jakarta (CGK)</p>
                  <p>4 Oktober 2023</p>
                </div>
              </Col>
              <Col md={2}>
                <div className="img">
                  <p>
                    <img
                      src="src/assets/images/plane.png"
                      alt=""
                      style={{ width: "75%", height: "75%" }}
                    />
                  </p>
                </div>
              </Col>
              <Col md={5}>
                <div className="text-body">
                  <p>20:15</p>
                  <p>Jakarta (CGK)</p>
                  <p>4 Oktober 2023</p>
                </div>
              </Col>
            </Row>

            <Row className="row-list pt-3 px-4">
              <Col md={4}>
                <ul>
                  <li>1 Penumpang</li>
                </ul>
              </Col>
              <Col md={4}>
                <ul>
                  <li>Kelas Ekonomi</li>
                </ul>
              </Col>
              <Col md={4}>
                <ul>
                  <li>2 j 0 m</li>
                </ul>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default DetailPerjalanan;
