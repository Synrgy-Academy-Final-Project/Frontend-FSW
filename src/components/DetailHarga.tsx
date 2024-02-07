import { Button, Card, Container, Table } from "react-bootstrap";
import { useState } from "react";
import "./DetailHarga.css";

const DetailHarga = ({price, data}) => {  
  const formatPrice = (price: number) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  
    return formattedPrice;
  };

  const handleSubmit = () => {
    console.log("data btn >>> ", data, bayar);
  }

  const hargaAwal = {
    pajak : 300000,
    diskon : 150000
  }

  const bayar = price + hargaAwal.pajak - hargaAwal.diskon

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
                  <td className="text-end fw-bold">{formatPrice(price)} x 1</td>
                </tr>
                <tr>
                  <td>Harga Dasar</td>
                  <td className="text-end" style={{ fontSize: "16px" }}>
                  {formatPrice(price)}
                  </td>
                </tr>
                <tr>
                  <td>Pajak dan biaya lainnya</td>
                  <td className="text-end" style={{ fontSize: "16px" }}>
                  {formatPrice(hargaAwal.pajak)}
                  </td>
                </tr>
                <tr style={{ fontSize: "20px" }}>
                  <td className="fw-bold">Diskon</td>
                  <td
                    className="text-end fw-bold"
                    style={{ fontSize: "20px", color: "#18AF5E" }}>
                    - {formatPrice(hargaAwal.diskon)}
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
                  {formatPrice(price + hargaAwal.pajak)}
                  </td>
                </tr>
              </tbody>
            </Table>
            <p
              className="text-end pe-2 fw-bold"
              style={{ fontSize: "24px", color: "#3E7BFA" }}
            >
            {formatPrice(bayar)}
            </p>
            <Button
              style={{ backgroundColor: "#3e7bfa", borderColor: "#3e7bfa" }}
              className="button-harga"
              onClick={handleSubmit}
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
