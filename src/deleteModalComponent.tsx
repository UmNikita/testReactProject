import "./modal.css"
import { ModalDeleteProp } from "./types";

function DeleteModalComponent(prop: ModalDeleteProp) {
  return (
    <div className="modal-container">
      <div className="modal-bg" />
      <div className="modal-content modal-delete">
        <h1>Внимание!</h1>
        <p>Вы действительно хотите удалить семинар?</p>
        <button className="modal-btn btn-ok" onClick={prop.acceptWindow}>
          Удалить
        </button>
        <button className="modal-btn btn-cancel" onClick={prop.closeWindow}>
          Отмена
        </button>
      </div>
    </div>
  );
}

export default DeleteModalComponent;