import "./FormProfile.css";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import ModalKonfirmasi from "./ModalKonfirmasi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormProfile = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleSimpanClick = () => {
    setShowModal(true);
  };

  const handleBatalClick = () => {
    // Navigasi ke route /profile
    navigate("/profile");
    // Menghapus localStorage "isEditClicked"
    localStorage.removeItem("isEditClicked");
  };
  return (
    <div className="form-profile">
      <Card className="card-form mx-0">
        <Card.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">Nama Depan</Form.Label>
              <Form.Control
                className="form-input"
                type="nama"
                placeholder="Nama Depan"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">Nama Belakang</Form.Label>
              <Form.Control
                className="form-input"
                type="nama"
                placeholder="Nama Belakang"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">Tanggal Lahir</Form.Label>
              <Form.Control
                className="form-input"
                type="date"
                placeholder="DD/MM/YYYY"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">Alamat</Form.Label>
              <Form.Control
                className="form-input"
                type="address"
                placeholder="Alamat"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">Jenis Kelamin</Form.Label>
              <Form.Select className="form-input">
                <option value="">Pilih Jenis Kelamin</option>
                <option value="male">Laki-Laki</option>
                <option value="female">Perempuan</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">Nomor Ponsel</Form.Label>
              <Form.Control
                className="form-input"
                type="nomor"
                placeholder="Nomor Ponsel"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">Visa</Form.Label>
              <Form.Control
                className="form-input"
                type="visa"
                placeholder="Visa"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">Passport</Form.Label>
              <Form.Control
                className="form-input"
                type="passport"
                placeholder="Passport"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">Resident Permit</Form.Label>
              <Form.Control
                className="form-input"
                type="residentPermit"
                placeholder="Resident Permit"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">NIK</Form.Label>
              <Form.Control
                className="form-input"
                type="NIK"
                placeholder="NIK"
              />
            </Form.Group>
          </Form>
          <ModalKonfirmasi
            show={showModal}
            onHide={() => setShowModal(false)}
          />
          <Button
            variant="primary"
            className="button-simpan my-3 "
            onClick={handleSimpanClick}
          >
            Simpan
          </Button>
          <Button variant="danger" className="button-keluar mb-3">
            <div
              className="d-flex align-items-center justify-content-center"
              onClick={handleBatalClick}
            >
              Batal
            </div>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FormProfile;
