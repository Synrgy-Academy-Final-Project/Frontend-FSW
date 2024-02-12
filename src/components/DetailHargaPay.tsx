import { Button, Card, Container, Table } from "react-bootstrap";
import "./DetailHarga.css";

const DetailHarga = ({ penumpang, harga, diskon }) => {
  const formatPrice = (price: number) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);

    return formattedPrice;
  };

  let adultCount = 0;
  let childCount = 0;
  let babyCount = 0;
  let totalAdultPrice = 0;
  let totalChildPrice = 0;
  let totalBabyPrice = 0;

  penumpang.forEach((item) => {
    switch (item.type) {
      case "adult":
        adultCount++;
        totalAdultPrice += harga?.adult;
        break;
      case "child":
        childCount++;
        totalChildPrice += harga?.kids;
        break;
      case "baby":
        babyCount++;
        totalBabyPrice += harga?.baby;
        break;
      default:
        break;
    }
  });

  const totalPrice = totalAdultPrice + totalChildPrice + totalBabyPrice;
  const hargaDiskon = totalPrice * (diskon?.value /100)
  const bayar = totalPrice - parseInt(hargaDiskon.toFixed(0)) + 15000

  return (
    <div>
      <Container fluid className="mt-5">
        <Card className="card">
          <Card.Header className="card-title">Rincian Harga</Card.Header>
          <Card.Body>
            <Table responsive>
              <tbody>
                <tr style={{ fontSize: "16px" }}>
                  <td className="">Dewasa & Anak</td>
                  <td className="text-end">{formatPrice(harga?.adult)} x {adultCount + childCount}</td>
                </tr>
                <tr style={{ fontSize: "16px" }}>
                  <td className="">Bayi</td>
                  <td className="text-end">{formatPrice(harga?.baby)} x {babyCount}</td>
                </tr>
                <tr>
                  <td>Total Tiket</td>
                  <td className="text-end" style={{ fontSize: "16px" }}>
                    {formatPrice(totalPrice)}
                  </td>
                </tr>
                <tr style={{ fontSize: "16px" }}>
                  <td className="">Diskon</td>
                  <td
                    className="text-end"
                    style={{ fontSize: "16px", color: "#18AF5E" }}
                  >
                    -{formatPrice(parseInt(hargaDiskon.toFixed(0)))}
                  </td>
                </tr>
                <tr>
                  <td>Admin</td>
                  <td className="text-end" style={{ fontSize: "16px" }}>
                    Rp. 15.000
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
                    {formatPrice(totalPrice + 15000)}
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
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default DetailHarga;
