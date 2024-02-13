import "./FormProfile.css";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import ModalKonfirmasi from "./ModalKonfirmasi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const FormProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [visa, setVisa] = useState("");
  const [passport, setPassport] = useState("");
  const [residentPermit, setResidentPermit] = useState("");
  const [nik, setNik] = useState("");

  const navigate = useNavigate();
  const base_url = "https://fly-id-1999ce14c36e.herokuapp.com";

  const formatDate = (isoDate) => {
    const [year, month, day] = isoDate.split("-");
    return `${day}-${month}-${year}`;
  };

  const handleSimpanClick = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: formatDate(dateOfBirth),
        address: address,
        gender: gender,
        phoneNumber: phoneNumber,
        visa: visa,
        passport: passport,
        residentPermit: residentPermit,
        nik: nik,
      };

      const response = await fetch(base_url + "/user-detail/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });
      const responseJson = await response.json();

      if (response.status !== 200) {
        alert("Error: " + responseJson.message);
      } else {
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error updated profile:", error);
      alert("Gagal mengganti profile");
    }
  };

  const handleBatalClick = () => {
    // Navigasi ke route /profile
    navigate("/profile");
    // Menghapus localStorage "isEditClicked"
    localStorage.removeItem("isEditClicked");
  };

  const handleInputPhoneNumber = (e) => {
    const { value } = e.target;

    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleInputVisa = (e) => {
    const { value } = e.target;

    if (/^\d*$/.test(value)) {
      setVisa(value);
    }
  };

  const handleInputPassport = (e) => {
    const { value } = e.target;

    if (/^\d*$/.test(value)) {
      setPassport(value);
    }
  };

  const handleInputResidentPermit = (e) => {
    const { value } = e.target;

    if (/^\d*$/.test(value)) {
      setResidentPermit(value);
    }
  };

  const handleInputNik = (e) => {
    const { value } = e.target;

    if (/^\d*$/.test(value)) {
      setNik(value);
    }
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">Nama Belakang</Form.Label>
              <Form.Control
                className="form-input"
                type="nama"
                placeholder="Nama Belakang"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">Tanggal Lahir</Form.Label>
              <Form.Control
                className="form-input"
                type="date"
                placeholder="DD/MM/YYYY"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">Alamat</Form.Label>
              <Form.Control
                className="form-input"
                type="address"
                placeholder="Alamat"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">Jenis Kelamin</Form.Label>
              <Form.Select
                className="form-input"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">Nomor Ponsel</Form.Label>
              <Form.Control
                className="form-input"
                type="nomor"
                placeholder="Nomor Ponsel"
                onChange={handleInputPhoneNumber}
                pattern="\d*"
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">Visa</Form.Label>
              <Form.Control
                className="form-input"
                type="visa"
                placeholder="Visa"
                onChange={handleInputVisa}
                pattern="\d*"
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">Passport</Form.Label>
              <Form.Control
                className="form-input"
                type="passport"
                placeholder="Passport"
                onChange={handleInputPassport}
                pattern="\d*"
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">Resident Permit</Form.Label>
              <Form.Control
                className="form-input"
                type="residentPermit"
                placeholder="Resident Permit"
                onChange={handleInputResidentPermit}
                pattern="\d*"
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="form-tittle">NIK</Form.Label>
              <Form.Control
                className="form-input"
                type="NIK"
                placeholder="NIK"
                onChange={handleInputNik}
                pattern="\d*"
                required
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
