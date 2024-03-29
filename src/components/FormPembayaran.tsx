import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'

import "./FormPembayaran.css";
import useSnap from "../hooks/useSnap.js";
import { useEffect, useState } from "react";

type TransformedItem = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  airplaneAdditionalId: string;
  phoneNumber?: string; // Menjadikan phoneNumber opsional dengan tanda tanya (?)
};

export default function FormPembayaran({ bookingData, discount }) {
  const { snapPay } = useSnap();
  const [orderId, setOrderId] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const options = [
    { value: 'midtrans', label: 'Midtrans' }
  ]

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const formatDate = (dateTimeString: string) => {
    const departureDate = new Date(dateTimeString);
    const formattedDate = departureDate.toISOString().split("T")[0];
    const hour = departureDate.getHours();
    const minute = departureDate.getMinutes();
    const seconds = departureDate.getSeconds();

    const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    return {
      formattedDate: formattedDate,
      formattedTime: formattedTime,
    };
  };

  const handleTransactions = async () => {
    const token = localStorage.getItem("token");
    const transformedData = bookingData?.penumpang.map(item => {
      const { name, phoneNumber, date } = item;
      const [firstName, lastName] = name.split(" ");
      const transformedItem: TransformedItem = {
          firstName: firstName,
          lastName: lastName,
          dateOfBirth: date,
          airplaneAdditionalId: ""
      };
      if (phoneNumber) {
          transformedItem.phoneNumber = phoneNumber;
      }
      return transformedItem;
  });
  
    const url =
      "https://fly-id-1999ce14c36e.herokuapp.com/transaction/midtrans";
    const requestBody = {
      companyName: bookingData?.tickets.companyName,
      url: "https://img2.pngdownload.id/20180905/pop/kisspng-batik-air-jakarta-logo-airplane-airline-5b9077f8952323.6709789015361945526109.jpg",
      airplaneId: bookingData?.tickets.airplaneId,
      airplaneName: bookingData?.tickets.airplaneName,
      airplaneCode: bookingData?.tickets.airplaneCode,
      airplaneClassId: bookingData?.tickets.airplaneClassId,
      airplaneClass: bookingData?.tickets.airplaneClass,
      airplaneTimeFLightId: bookingData?.tickets.airplaneFlightTimeId,
      departureCode: bookingData?.tickets.departureCode,
      departureDate: formatDate(bookingData?.tickets.departureTime).formattedDate,
      departureTime: formatDate(bookingData?.tickets.departureTime).formattedTime,
      arrivalCode: bookingData?.tickets.arrivalCode,
      arrivalDate: formatDate(bookingData?.tickets.arrivalTime).formattedDate,
      arrivalTime: formatDate(bookingData?.tickets.arrivalTime).formattedTime,
      priceFlight: bookingData?.harga.adult.toString(),
      codePromo: discount?.promoCode,
      userDetails: transformedData,
    };
    console.log("btn submit", requestBody);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });
      console.log("data req >>", requestBody);
      
      if (response.status === 200) {
        const data = await response.json();
        console.log("data res >>> ", data);
        setOrderId(data?.data.orderId)
        
        snapPay(data?.data.token, {
          onSuccess: function (result) {
            console.log("success in TSX", result);
          },
          onPending: function (result) {
            console.log("wating", result);
          },
          onError: function (result) {
            console.log("failed", result);
          },
          onClose: function () {
          },
        });
        
      } else {
        console.log("ada eror", response);
      }
    } catch (error) {
      console.error("Error during API request:", error);
    }
  };

  return (
    <>
      <Container className="my-5">
        <div className="row mt-4">
          <div className="col-1">
            <img src="./images/20943832 1.png" alt="" />
          </div>
          <div className="col-11 desc-payment">
            <h3 className="b-24-p ps-4">
              Semua informasi kartu sepenuhnya aman dan terlindungi
            </h3>
          </div>
        </div>
        <div className="row mt-4 px-2">
          <Card className="px-0 mwa">
            <Card.Header className="bg-primary text-white">
              <h5 className="sb-20-w pt-2">Pembayaran</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <>
                    <Form.Label>
                      Metode Pembayaran<span className="text-danger">*</span>
                    </Form.Label>
                    <Select options={options} defaultValue={options} />
                    <div className="mt-3">
                      <Form.Check type="checkbox" id="">
                        <Form.Check.Input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                        <Form.Check.Label>
                          Dengan melakukan pembayaran ini, saya telah menyetujui
                          segala{" "}
                          <span className="text-primary">
                            Ketentuan Pengguna{" "}
                          </span>
                          dan{" "}
                          <span className="text-primary">Kebijakan Privasi</span>{" "}
                          Fly.id
                        </Form.Check.Label>
                      </Form.Check>
                    </div>
                  </>
                  <div className="d-grid gap-2 mt-3">
                    <Button variant="primary" onClick={handleTransactions} disabled={!isChecked}>
                      <img src="./icon/Shield Check.svg" alt="" />
                      Bayar
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
