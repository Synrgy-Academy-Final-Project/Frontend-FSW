import { Button, Card, Container, Table } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";
import "./DetailHarga.css";

const DetailHarga = ({ bookingData,passengersData }) => {
  const navigate = useNavigate();
  const price = bookingData?.tickets.totalPrice
  const [isPassengerDetailFilled, setIsPassengerDetailFilled] = useState(false);
  useEffect(() => {
    const allPassengerDetailsFilled = passengersData.every(passengerType => {
      const bookingType = passengerType.type;
      const passengerCount = passengerType.count;
      const passengersOfType = bookingData.penumpang.filter(passenger => passenger.type === bookingType);
      if (passengersOfType.length !== passengerCount) return false;
      return passengersOfType.every(penumpang => {
        if (penumpang.type === "adult") {
          return penumpang.name && penumpang.date && penumpang.gender && penumpang.phoneNumber;
        } else {
          return penumpang.name && penumpang.date && penumpang.gender;
        }
      });
    });

    setIsPassengerDetailFilled(allPassengerDetailsFilled);
  }, [bookingData, passengersData]);



  const formatPrice = (price: number) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);

    return formattedPrice;
  };

  const pajak = 15000
  const hargaKids = price;
  const hargaBaby = parseInt((price * 0.2).toFixed(0));

  const handleSubmit = () => {
    if (isPassengerDetailFilled) {
      const fixData = {
        tickets: bookingData?.tickets,
        pemesan: bookingData?.pemesan,
        penumpang: bookingData?.penumpang,
        harga: {
          adult: price,
          kids: hargaKids,
          baby: hargaBaby,
        }
      }
      navigate('/detailpembayaran', {
        state: {
          bookingData: fixData
        },
      });
    } else {
      alert("Silakan lengkapi semua detail penumpang terlebih dahulu.");
    }
  };

  return (
    <div>
      <div className="card mt-3 " style={{ maxWidth:"100%" }}>
        <Card.Header className="card-title">Rincian Harga</Card.Header>
        <Card.Body>
          <Table responsive>
            <tbody>
              <tr>
                <td>Tiket Dewasa & Anak - anak</td>
                <td className="text-end">{formatPrice(price)} x 2</td>
              </tr>
              <tr>
                <td>Tiket Harga Bayi</td>
                <td className="text-end" style={{ fontSize: "16px" }}>
                  {formatPrice(price * 0.2) } 
                </td> 
              </tr>
              <tr>
                <td>Pajak dan biaya lainnya</td>
                <td className="text-end" style={{ fontSize: "16px" }}>
                  {formatPrice(pajak)}
                </td>
              </tr>
            </tbody>
          </Table>
          <Button
              style={{ backgroundColor: "#3e7bfa", color: "white", maxWidth:"100%" }}
              className={`btn button-harga ${isPassengerDetailFilled ? "" : "disabled"}`}
              onClick={handleSubmit}
              disabled={!isPassengerDetailFilled}
          >
            Lanjut ke pembayaran
          </Button>
        </Card.Body>
      </div>
    </div>
  );
};

export default DetailHarga;
