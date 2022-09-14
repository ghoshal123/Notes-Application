import React from 'react'

const Form = ({ title, setTitle, desc,  setDesc, notes, setNotes, date, editNoteId, setEditNoteId, setToogleBtn, toogleBtn }) => {

    const submitForm = (e) => {
        if (!title && !desc) {
            alert("Please Fill the data");
        }
        else if (title && desc && !toogleBtn) {
            setNotes(
                notes.map((elem) => {
                    if (elem.id === editNoteId) {
                        return { ...elem, title: title, desc: desc,completed: false}
                    }
                    return elem;
                })
            )
            setToogleBtn(false);
            setTitle("");
            setDesc("");
            setEditNoteId(null);

        }
        else {
            e.preventDefault();
            const allInputData = { title: title, desc: desc, date: date, id: new Date().getTime(), completed: false };
            setNotes([...notes, allInputData]);
            setTitle("");
            setDesc("");
            
        }

    }

    const removeAll = () => {
        setNotes([]);
    }

    const removeCheck = () => {
        //e.preventDefalt();
        let selected = notes.filter((myId) => {
            return myId.completed !== true;
          });
          console.log(selected);
          setNotes(selected);
      }

    return (
        <div>
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <form style={{ border: "2px solid black", borderRadius: "10px", padding: "30px", backgroundColor: "whitesmoke" }}>
                            <div className="mb-3">
                                <label htmlFor="title" className='form-label'><b>Title</b></label>
                                <input type="text" className="form-control" id="title" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className='form-label'><b>Description</b></label>
                                <textarea name="desc" className='form-control' id="desc" cols="5" rows="2" placeholder='Enter Description' value={desc} onChange={(e) => setDesc(e.target.value)} />
                            </div>

                            <div className="col text-center">
                                {
                                    toogleBtn ? <button type="submit" className="btn btn-primary" style={{outline:"3px solid skyblue"}} onClick={submitForm}><b><i className="icon-plus" ></i>&nbsp;Add Note</b></button> :
                                        <button type="submit" className="btn btn-dark" onClick={submitForm}><b><i className="icon-edit"></i>&nbsp;Update Note</b></button>
                                }
                                <button type="submit" className="btn btn-danger mx-2" style={{outline:"3px solid red"}} onClick={removeAll}><b><i className="icon-trash z"></i>&nbsp;Delete All</b></button>
                                <button type="submit" style={{outline:"3px solid green"}} onClick={removeCheck} className="btn btn-success mx-2" ><b><i className="icon-remove z"></i>&nbsp;Remove</b></button>

                               

                            </div>
                        </form>
                    </div>
                </div>
            </div><br />
           
        </div>
    )
}

export default Form