import { Button, Card, Container, Table } from "react-bootstrap";
import "./DetailHarga.css";

const DetailHarga = ({ harga, diskon, total }) => {
  const formatPrice = (price: number) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);

    return formattedPrice;
  };

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
                  <td className="text-end fw-bold">{ formatPrice(harga?.adult) } x 1</td>
                </tr>
                <tr style={{ fontSize: "20px" }}>
                  <td className="fw-bold">Anak - anak</td>
                  <td className="text-end fw-bold">{ formatPrice(harga?.kids) } x 1</td>
                </tr>
                <tr style={{ fontSize: "20px" }}>
                  <td className="fw-bold">Bayi</td>
                  <td className="text-end fw-bold">{ formatPrice(harga?.baby) } x 1</td>
                </tr>
                <tr>
                  <td>Harga Dasar</td>
                  <td className="text-end" style={{ fontSize: "16px" }}>
                  { formatPrice(harga?.base) }
                  </td>
                </tr>
                <tr>
                  <td>Pajak dan biaya lainnya</td>
                  <td className="text-end" style={{ fontSize: "16px" }}>
                    Rp. 575.000
                  </td>
                </tr>
                <tr style={{ fontSize: "20px" }}>
                  <td className="fw-bold">Diskon</td>
                  <td
                    className="text-end fw-bold"
                    style={{ fontSize: "20px", color: "#18AF5E" }}
                  >
                    -{formatPrice(diskon)}
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
                    {formatPrice(total)}
                  </td>
                </tr>
              </tbody>
            </Table>
            <p
              className="text-end pe-2 fw-bold"
              style={{ fontSize: "24px", color: "#3E7BFA" }}
            >
              {formatPrice(total - diskon)}
            </p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default DetailHarga;