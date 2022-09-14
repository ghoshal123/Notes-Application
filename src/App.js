import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import Notes from './components/Notes';
import './App.css';
function App() {

  const getNotesFromLs = () => {
    let myNotes = localStorage.getItem("NOTES");
    if (myNotes) {
      return JSON.parse((localStorage.getItem("NOTES")));
    }
    else {
      return [];
    }
  }
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState(getNotesFromLs());
  const [delnotes,setDelNotes]=useState([]);
  const [editNoteId, setEditNoteId] = useState(null);
  const [toogleBtn, setToogleBtn] = useState(true);
 

  useEffect(() => {
    localStorage.setItem("NOTES", JSON.stringify(notes));
  }, [notes])

  // console.log(notes);
  let date = new Date().toLocaleString();
  
  
  
  

  return (
    <div className="App">


      <Form title={title} setTitle={setTitle} toogleBtn={toogleBtn} setToogleBtn={setToogleBtn} desc={desc} editNoteId={editNoteId} setEditNoteId={setEditNoteId} setDesc={setDesc} notes={notes} setNotes={setNotes} date={date} delnotes={delnotes} setDelNotes={setDelNotes}/><br />
      <div className="container">
        <div className="row-justify-content-center">
          <div className="col-md-10">
            <h1 className='mb-3' style={{ textAlign: "center" }}><i className="icon-book"></i>&nbsp;My Notes</h1>


            {
              notes.length === 0 ?
                <div className='card-mb3'>
                  <div className="card-body text-primary">
                    <p className="card-text" style={{ color: "red", textAlign: 'center' }}><h1><i className="icon-eye-close"></i>&nbsp;No Data to display</h1></p>
                  </div>
                </div> : notes.map((element) => {
                  return (
                    <div>
                      <div className="container my-3" style={{margin:"auto"}}>
                        <div className="card" style={{ width: "20rem",outline:"2px solid black" }}>
                          <div className="card border-secondary mb-2 mt-2" style={{ maxWidth: "20rem",outline:"2px solid black" }}>
                            <Notes element={element} key={element.id} setTitle={setTitle} setToogleBtn={setToogleBtn} setDesc={setDesc} title={title} desc={desc} notes={notes} setNotes={setNotes} editNoteId={editNoteId} setEditNoteId={setEditNoteId}  />
                            <div className="col text-center">
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  )
                })
            }

          </div>
        </div>
      </div>

    </div>
  )

}



export default App;
