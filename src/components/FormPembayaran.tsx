import { Button, Card, Container, Form } from "react-bootstrap";
import "./FormPembayaran.css";

export default function FormPembayaran() {
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
        <div className="row mt-4">
          <Card className="px-0">
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
                    Metode Pembayaranspan<span className="text-danger">*</span>
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
                      <img src="src/assets/icon/Shield Check.svg" alt="" />
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
