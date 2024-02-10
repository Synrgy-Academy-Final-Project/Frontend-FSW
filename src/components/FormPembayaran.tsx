import { Button, Card, Container, Form } from "react-bootstrap";
import "./FormPembayaran.css";

export default function FormPembayaran({ bookingData, discount, bayar }) {
  const handleTransactions = async () => {
    const token = localStorage.getItem('token')
    const url = 'https://fly-id-1999ce14c36e.herokuapp.com/transaction/midtrans';
    const requestBody = {
      companyName: bookingData?.pesawat.companyName,
      url: bookingData?.pesawat.urlLogo,
      airplaneId: bookingData?.pesawat.airplaneId,
      airplaneName: bookingData?.pesawat.airplaneName,
      airplaneCode:  bookingData?.pesawat.airplaneCode,
      airplaneClassId:  bookingData?.pesawat.airplaneClassId,
      airplaneClass:  bookingData?.pesawat.airplaneClass,
      airplaneTimeFLightId:  bookingData?.pesawat.airplaneFlightTimeId,
      departureCode: bookingData?.pesawat.departureCode,
      departureDate: "2024-01-17",
      departureTime: "12:00:00",
      arrivalCode:  bookingData?.pesawat.arrivalCode,
      arrivalDate: "2024-01-17",
      arrivalTime: "14:30:00",
      priceFlight: bayar.toString(),
      codePromo: discount?.promoCode,
      userDetails: [
        {
          firstName: bookingData?.penumpang.nameAdult,
          lastName: "TU",
          phoneNumber: bookingData?.penumpang.phone,
          dateOfBirth: bookingData?.penumpang.dateAdult,
          airplaneAdditionalId: "",
        },
        {
          firstName: bookingData?.penumpang.nameKids,
          lastName: "Ja",
          phoneNumber: "08123421233123778",
          dateOfBirth: bookingData?.penumpang.dateKids,
          airplaneAdditionalId: "b577e79a-f486-47a3-b3fa-d774640a18c0",
        },
        {
          firstName: bookingData?.penumpang.nameBaby,
          lastName: "Ja",
          dateOfBirth: bookingData?.penumpang.dateBaby,
        },
        {
          firstName: "mam",
          lastName: "Ja",
          phoneNumber: "08123421233123878",
          dateOfBirth: "1998-12-21",
          airplaneAdditionalId: "",
        },
      ],
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(requestBody)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
      console.log('API response:', responseData);
    } catch (error) {
      console.error('Error during API request:', error);
    }
  };
  

  return (
    <>
      <Container className="my-5">
        <div className="row mt-4">
          <div className="col-1">
            <img src="src/assets/images/20943832 1.png" alt="" />
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
                  <Form.Label>
                    Metode Pembayaran<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Pilih metode pembayaran</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <div className="row my-3">
                    <div className="col">
                      <Form.Label>Nama Pemegang Kartu</Form.Label>
                      <Form.Control type="text" placeholder="Nama" />
                    </div>
                    <div className="col">
                      <Form.Label>
                        Nomor Kartu Kredit/Debit
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="****-****-****-****"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <Form.Label>
                        Kedaluwarsa<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control type="text" placeholder="MM/YY" />
                    </div>
                    <div className="col">
                      <Form.Label>
                        CVV<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control type="text" placeholder="***" />
                    </div>
                  </div>
                  <div className="mt-3">
                    <Form.Check type="checkbox" id="">
                      <Form.Check.Input type="checkbox" />
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
                  <div className="d-grid gap-2 mt-3">
                    <Button variant="primary">
                      <img src="src/assets/icon/Shield Check.svg" alt="" onClick={handleTransactions} />
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
