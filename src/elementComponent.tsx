import { SeminarElementProp } from "./types";

function ElementComponent(prop: SeminarElementProp) {
  return (
    <div className="seminar-container">
        <div className="start-seminar-container">
            <p className="datetime">{prop.date} {prop.time}</p>
            <div className="image" style={{backgroundImage: `url("${prop.photo}")`}}></div>
        </div>
        <div className="middle-seminar-container">
            <p className="name-seminar">{prop.title}</p>
            <p className="description-seminar">{prop.description}</p>
        </div>
        <div className="end-seminar-container">
            <div className="deleteBtn" onClick={() => prop.deleteHandler(prop.id)}></div>
            <div className="editBtn" onClick={() => prop.editHandler(prop.id)}></div>
        </div>
    </div>
  );
}

export default ElementComponent;