import { Modal } from "react-bootstrap";

const ModalRemember = (props) => {
  const confirmationInformation = () => {
    props.onCLose();
    console.log("CONFIRMATION");
  };

  const cancelInformation = () => {
    props.onCLose();
    console.log("CANCEL");
  };

  return (
    <Modal
      show={props.statusModal}
      onHide={props.onCLose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header className="bg-secondary" closeButton>
        <Modal.Title>Recuperação de conta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <label htmlFor="info-mail">Digite seu e-mail para recuperação</label>
          <input type="email" id="info-mail" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-danger" onClick={cancelInformation}>
          {" "}
          Cancelar{" "}
        </button>
        <button className="btn btn-primary" onClick={confirmationInformation}>
          {" "}
          Confirmar{" "}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRemember;
