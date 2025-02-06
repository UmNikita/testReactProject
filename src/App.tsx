import "./style.css"
import ElementComponent from "./elementComponent";
import DeleteModalComponent from "./deleteModalComponent";
import EditModalComponent from "./editModalComponent";
import { useEffect, useState } from "react";
import { SeminarElement } from "./types";

function App() {

  const [seminarList, setSeminarList] = useState<SeminarElement[]>([]);
  const [deleteSelectedSeminar, setDeleteSelectedSeminar] = useState<number | null>(null)
  const [editSelectedSeminar, setEditSelectedSeminar] = useState<SeminarElement | null>(null)
  const [loadingText, setLoadingText] = useState<boolean>(true)

  //get seminars
  useEffect(()=>{
    fetch("http://localhost:3001/seminars", {method: "GET"})
    .then((res)=> res.json())
    .then((data)=> setSeminarList(data))
    .catch((err) => console.log("error :/"))
    .finally(()=>{
      setLoadingText(false)
    })
  }, [])

  //editing workshop data
  const editElement = (element) => {
    fetch(`http://localhost:3001/seminars/${editSelectedSeminar.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(element)
    })
    .then((res)=> res.json())
    .then((data)=> {
      setSeminarList((list)=>
      list.map((s)=> (s.id == data.id ? data : s)))
      setEditSelectedSeminar(null)
    })
    .catch((err) => console.log("error :/"))
  }

  //delete seminar
  const acceptDeleteModal = () => {
    fetch(`http://localhost:3001/seminars/${deleteSelectedSeminar}`, {
      method: "DELETE"
    })
    .catch((err) => console.log("error :/"))
    setSeminarList((list)=>list.filter((s)=>s.id != deleteSelectedSeminar))
    setDeleteSelectedSeminar(null)
  }

  return (
    <>
      <div className="main-container">
        <p id="title">Семинары</p>
        <div id="list-container">
          {loadingText ? <p id="loadingText">Загрузка...</p> : seminarList.map((seminar)=> {
            const seminarObj: SeminarElement = {
              id: seminar.id, title: seminar.title, description: seminar.description, date: seminar.date, time: seminar.time, photo: seminar.photo
            }
            return(
              <ElementComponent key={seminar.id} editHandler={()=>setEditSelectedSeminar(seminarObj)} deleteHandler={()=>setDeleteSelectedSeminar(seminar.id)} {...seminarObj} />
          )})}
        </div>
      </div>
      
      {deleteSelectedSeminar != null && <DeleteModalComponent closeWindow={()=>setDeleteSelectedSeminar(null)} acceptWindow={()=>acceptDeleteModal()} />}
      {editSelectedSeminar != null && <EditModalComponent element={editSelectedSeminar} closeWindow={()=>setEditSelectedSeminar(null)} acceptWindow={(element)=>editElement(element)} />}
    
    </>
  );
}

export default App;