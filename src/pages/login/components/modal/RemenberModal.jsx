import { Modal } from "react-bootstrap";



const ModalRemember = (props) => {
  const confirmationInformation = () => {
    props.onClose();
  }
  
  const cancelInformation = () => {
    props.onClose(); 
  }

  return (
    <Modal>
      <div className="modal fade" id="modalChangePassword" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Redefinição de senha</h5>
            </div>
            <div className="modal-body">
              <input type="email" />
            </div>
            <div className="modal-footer">
              <button onClick={confirmationInformation}> Confirmar </button>
              <button onClick={cancelInformation}> Cancelar </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalRemember;
