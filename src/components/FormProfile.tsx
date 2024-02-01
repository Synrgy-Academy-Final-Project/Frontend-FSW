import "./FormProfile.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { BsFlag } from "react-icons/bs";
import { BsPower } from "react-icons/bs";

const FormProfile = () => {
  return (
    <div className="form-profile">
      <Form>
        <Form.Group className="mb-2">
          <Form.Label className="form-tittle">Nama Lengkap</Form.Label>
          <Form.Control
            className="form-input"
            type="nama"
            placeholder="Nama Lengkap"
          />
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
          <Form.Label className="form-tittle">Email</Form.Label>
          <Form.Control
            className="form-input"
            type="email"
            placeholder="Email"
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
          <Form.Label className="form-tittle">Tanggal Lahir</Form.Label>
          <Form.Control
            className="form-input"
            type="date"
            placeholder="DD/MM/YYYY"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="form-tittle">Kewarganegaraan</Form.Label>
          <InputGroup>
            <Form.Control
              className="form-input-country"
              type="country"
              placeholder="Kewarganegaraan"
            />
            <InputGroup.Text className="icon-flag">
              <BsFlag />
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
      </Form>
      <Button variant="primary" className="button-simpan mb-3 ">
        Simpan
      </Button>
      <Button variant="danger" className="button-keluar mb-3">
        <div className="d-flex align-items-center justify-content-center ">
          <BsPower className="icon-power-off" />
          Keluar Akun
        </div>
      </Button>
    </div>
  );
};

export default FormProfile;
