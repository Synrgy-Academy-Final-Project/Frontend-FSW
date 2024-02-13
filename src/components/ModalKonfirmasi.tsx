import { Button, Modal } from "react-bootstrap";
import "./ModalKonfirmasi.css";

const ModalKonfirmasi = ({ show, onHide }) => {
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
        <Button className="button-yes" onClick={onHide}>
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
