import { Button, Card, Container, Table } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import "./DetailHarga.css";

const DetailHarga = ({ planeData, bookingData }) => {
  const navigate = useNavigate();
  const price = planeData?.totalPrice

  const formatPrice = (price: number) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);

    return formattedPrice;
  };

  const pajak = 500000
  let hargaKids = 0;
  let hargaBaby = 0;
  if (bookingData?.penumpang.nameKids !== "") {
    hargaKids = price
  }
  if (bookingData?.penumpang.nameBaby !== "") {
    hargaBaby = parseInt((price * 0.2).toFixed(0))
  }

  const handleSubmit = () => {
    const fixData = {
      pesawat: planeData,
      pemesan : bookingData?.pemesan,
      penumpang : bookingData?.penumpang,
      harga : {
        base: price,
        adult: price,
        kids: hargaKids,
        baby: hargaBaby,
      }
    }
    localStorage.setItem('bookingData', JSON.stringify(fixData));
    navigate('/detailpembayaran');
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
            Sumbit
          </div>
        </Card.Body>
      </div>
    </div>
  );
};

export default DetailHarga;
