import { Button, Modal } from "react-bootstrap";
import "./ModalTanpaLogin.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ModalTanpaLogin = ({ show, handleClose }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    handleClose();
    navigate("/login");
  };

  const handleRegister = () => {
    handleClose();
    navigate("/register");
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="modal-tittle">
        <img
          src={"./images/rafiki.png"}
          alt="flsah-icon"
          style={{ width: "200px", height: "200px" }}
        />
        <p className="text-tittle">Sudah punya akun? Masuk dulu yuk!</p>
        <p
          className="text-desc"
          style={{ fontSize: "16px", fontWeight: "400" }}
        >
          Atau registrasi jika belum punya akun
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="button-login" onClick={handleLogin}>
          Masuk
        </Button>
        <Button className="button-register" onClick={handleRegister}>
          Register
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTanpaLogin;
