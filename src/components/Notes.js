import React from 'react'

const Notes = ({ element, notes, setTitle, setDesc, setNotes, editNoteId, title, desc, setEditNoteId, setToogleBtn }) => {

    let removeData=(id)=>{
    const deleted=JSON.parse(localStorage.getItem("RAJAT")) || [];
      let newNotes=notes.filter((elem)=>{
        if(id===elem.id){
          deleted.push(elem);
        }
        return id!==elem.id;
      });
      localStorage.setItem("RAJAT",JSON.stringify(deleted));
    //  localStorage.setItem("NOTES", JSON.stringify(newNotes));
      
     //console.log(notes);
      setNotes(newNotes);
    }

    const editData = (id) => {
        let editNote = notes.find((elem) => {
            return elem.id === id
        });
        console.log(editNote);
        setTitle(editNote.title);
        setDesc(editNote.desc);
        setEditNoteId(id);
        setToogleBtn(false);

    }
    
    const CheckMultiple=(id)=> {
        let arr = [];
        notes.forEach((myId) => {
          if (myId.id === id) {
            if (myId.completed === false) {
              myId.completed = true;
            } else if (myId.completed === true) {
              myId.completed = false;
            }
          }
          arr.push(myId);
          console.log(arr);
          setNotes(arr);
        });
      }
     
      // (() => {
      // setNotes(notes);
      // })();




    return (
        <div>
        
            <div className="card-header" style={{ color: "red", outline:" 3px solid black"}}>
            <h3>
            <input className="form-check-input" type="checkbox" style={{outline:"3px solid black"}} checked={element.completed} onChange={() =>  CheckMultiple(element.id)} />&nbsp;
            Title:{element.title}</h3>
            </div>
            <div className="card-body text-secondary">
                <h5 className="card-title" style={{ color: "black" }}><b>Description:</b></h5>
                <p className="card-text" style={{ color: "black" }}><b>{element.desc}</b></p>
                <p className="card-text" style={{ color: "black" }}><b>{element.date}</b></p>
                <button type="button" className="btn btn-Light" onClick={() => { editData(element.id) }}><i className="icon-edit" style={{ fontSize: "40px", color: "green" }}></i></button>
                <button type="button" className="btn btn-Light mx-2" onClick={() => { removeData(element.id) }}><i className="icon-trash" style={{ fontSize: "40px", color: "red" }}></i></button>
            </div>
           

        </div>



    )
}

export default Notes