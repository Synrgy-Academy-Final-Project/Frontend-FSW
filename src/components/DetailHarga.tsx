import { Button, Card, Container, Table } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import "./DetailHarga.css";

const DetailHarga = ({ bookingData }) => {
  const navigate = useNavigate();
  const price = bookingData?.tickets.totalPrice

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
    const fixData = {
      tickets: bookingData?.tickets,
      pemesan : bookingData?.pemesan,
      penumpang : bookingData?.penumpang,
      harga : {
        adult: price,
        kids: hargaKids,
        baby: hargaBaby,
      }
    }
    // localStorage.setItem('bookingData', JSON.stringify(fixData));
    navigate('/detailpembayaran', {
      state: {
        bookingData: fixData
      },
    });
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
          <div
            style={{ backgroundColor: "#3e7bfa", color: "white", maxWidth:"100%" }}
            className="btn button-harga"
            onClick={handleSubmit}
          >
            Lanjut ke pembayaran
          </div>
        </Card.Body>
      </div>
    </div>
  );
};

export default DetailHarga;
