import { useState } from "react";
import "./modal.css"
import { ModalEditProp } from "./types";

function EditModalComponent({element, acceptWindow, closeWindow}: ModalEditProp) {

  const [title, setTitle] = useState<string>(element.title)
  const [description, setDescription] = useState<string>(element.description)
  const [date, setDate] = useState<string>(element.date.split(".").reverse().join("-"))
  const [time, setTime] = useState<string>(element.time)

  const acceptWindowClicked = ()=>{
    const element = {
      title: title,
      description: description,
      date: new Date(date).toLocaleDateString("ru-Ru"),
      time: time,
    }
    acceptWindow(element)
    }
    return (
      <div className="modal-container">
        <div className="modal-bg" />
        <div className="modal-content modal-edit">
          <h1>Изменение семинара</h1>
          <p>Имя семинара</p>
          <input maxLength={36} defaultValue={title} onChange={(e)=>setTitle(e.target.value)} id="titleInput" />
          <p>Описание</p>
          <textarea maxLength={250} defaultValue={description} onChange={(e)=>setDescription(e.target.value)} id="descriptionInput" />
          <p>Дата</p>
          <input type="date" defaultValue={date} onChange={(e)=>setDate(e.target.value)} id="dateInput" />
          <p>Время</p>
          <input type="time" defaultValue={time} onChange={(e)=>setTime(e.target.value)} id="timeInput" />
          <p></p>
          <button className="modal-btn btn-ok" onClick={()=>acceptWindowClicked()}>
            Принять
          </button>
          <button className="modal-btn btn-cancel" onClick={closeWindow}>
            Отмена
          </button>
        </div>
      </div>
    );
  }
  
  export default EditModalComponent;