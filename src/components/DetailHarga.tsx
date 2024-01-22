import React from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import "./DetailHarga.css";

const DetailHarga = () => {
  return (
    <div>
      <Container fluid className="mt-5">
        <Card className="card">
          <Card.Header className="card-title">Rincian Harga</Card.Header>
          <Card.Body>
            <Table responsive>
              <tbody>
                <tr style={{ fontSize: "20px" }}>
                  <td className="fw-bold">Dewasa</td>
                  <td className="text-end fw-bold">Rp. 1.500.000 x 1</td>
                </tr>
                <tr>
                  <td>Harga Dasar</td>
                  <td className="text-end" style={{ fontSize: "16px" }}>
                    Rp. 1.000.000
                  </td>
                </tr>
                <tr>
                  <td>Pajak dan biaya lainnya</td>
                  <td className="text-end" style={{ fontSize: "16px" }}>
                    Rp. 500.000
                  </td>
                </tr>
                <tr style={{ fontSize: "20px" }}>
                  <td className="fw-bold">Diskon</td>
                  <td
                    className="text-end fw-bold"
                    style={{ fontSize: "20px", color: "#18AF5E" }}
                  >
                    -Rp. 25.000
                  </td>
                </tr>
                <tr>
                  <td className="fw-bold" style={{ fontSize: "24px" }}>
                    Total Harga
                  </td>
                  <td
                    className="text-end fw-bold"
                    style={{ fontSize: "16px", textDecoration: "line-through" }}
                  >
                    Rp. 1.500.000
                  </td>
                </tr>
              </tbody>
            </Table>
            <p
              className="text-end pe-2 fw-bold"
              style={{ fontSize: "24px", color: "#3E7BFA" }}
            >
              Rp. 9.000.000
            </p>
            <Button
              style={{ backgroundColor: "#3e7bfa", borderColor: "#3e7bfa" }}
              className="button-confirm"
            >
              Sumbit
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default DetailHarga;
