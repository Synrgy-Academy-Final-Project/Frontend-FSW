import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "./ModalKonfirmasi.css";

const ModalKonfirmasi = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="modal-tittle">
          <p>Anda yakin ingin keluar?</p>
          <img src={"src/assets/images/amico.jpg"} alt="flsah-icon" />
        </Modal.Body>
        <Modal.Footer>
          <Button className="button-yes" onClick={handleClose}>
            Ya
          </Button>
          <Button className="button-no" onClick={handleClose}>
            Tidak
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalKonfirmasi;
