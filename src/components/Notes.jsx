import React, {useState} from 'react'
import {createRef} from 'react'
import "./Notes.css"
function Notes() {
    const [note, setNote] = useState({note_value:"", date:new Date().toLocaleString()})
    const [remaining, setRemaining] = useState("200 Remaining ")
    const [notes , setNotes] = useState([])
    let inputRef = createRef();
    const handlChange = (e)=>{
      if(e.target.value.length <= 200){
        console.log(e.target.value.length);
        setNote((oldValue) => ({
          ...oldValue,
          note_value: e.target.value,
        }));
        setRemaining(`${e.target.value.length}/200`);
      }
    }

    const saving = (e)=>{
      e.preventDefault();
      if(note.note_value != ""){
        notes.push(note);
        setNote({
          date: new Date().toLocaleString(),
          note_value: "",
        });
        console.log(notes)
      }else{
        inputRef.current.focus()
      }
    }


  return (
    <div>
      <div>
        <div className="row w-100 p-3">
          <div className="col-4 p-0">
            <form action="" className='bg-info p-2 rounded-3 m-3'>
              <textarea name="" id="" cols="20" rows="4" className="border-0 outline-0 form-control bg-info" style={{ resize: "none" }} placeholder="type to add a note ..." onChange={handlChange} value={note.note_value} ref={inputRef}></textarea>
              <div className="text-end">
                <button className='btn btn-success p-1'>Dell</button>
              </div>
              <div className="row mt-3">
                <div className="col-8">
                  {remaining}
                </div>
                <div className="col-4 text-end">
                  <button className="btn btn-light p-2 rounded-4 pt-0 pb-0" onClick={saving}>save</button>
                </div>
              </div>
            </form>
          </div>
          {
            notes.map(item=>(
            
              <div className="col-4 p-0">
                <form action="" className=' bg-danger p-2 rounded-3 m-3'>
                  <textarea name="" id="" cols="20" rows="4" className="border-0 outline-0 form-control bg-danger" style={{ resize: "none" }} value={item.note_value} disabled={true} ></textarea>
                  <div className="text-end">
                  </div>
                  <div className="row mt-5">
                    <div className="col-8">
                      {item.date}
                    </div>
                    <div className="col-4 text-end">
                      <button className="btn btn-light p-2 rounded-4 pt-0 pb-0" onClick={saving}>Delet</button>
                    </div>
                  </div>
                </form>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Notes