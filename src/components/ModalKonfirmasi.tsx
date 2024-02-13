import { Button, Modal } from "react-bootstrap";
import "./ModalKonfirmasi.css";
import { useNavigate } from "react-router-dom";

const ModalKonfirmasi = ({ show, onHide }) => {
  const navigate = useNavigate();

  const handleOK = () => {
    navigate("/profile");
    localStorage.removeItem("isEditClicked");
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="modal-tittle">
        <p>Anda yakin ingin keluar?</p>
        <img src={"./images/amico.jpg"} alt="flsah-icon" />
      </Modal.Body>
      <Modal.Footer>
        <Button className="button-yes" onClick={handleOK}>
          Ya
        </Button>
        <Button className="button-no" onClick={onHide}>
          Tidak
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalKonfirmasi;
