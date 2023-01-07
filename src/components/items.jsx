import React from 'react'
import {useState, useEffect} from 'react'
import "./items.css"

function Items() {
  const [item, setItem] = useState({ itemName: "", quantite: 1, itemStyle: "" });
  const [items, setItems] = useState([]);
  let total = 0;  

  useEffect(() => {
    // ckeck if the localStorage is note empty, If its create a variable mydata with value of empty table
    if (localStorage.getItem("mydata") === null) {
      localStorage.setItem("mydata", "[]");
    }else{
      let tb = JSON.parse(localStorage.getItem("mydata"))
      setItems(tb)
    }
  }, []);

  
  const handlChange = (e)=>{
      setItem((oldValue) => ({
        ...oldValue,
        // the id takes by default its as the index of element in the tible because in the first time the length of the tible will be 0 and the Id will take this value 
        id: JSON.parse(localStorage.getItem("mydata")).length,
        itemName: e.target.value,
      }));
  }

  

  const addItems = (e)=>{
    e.preventDefault()
    // change the localStorage variable with new table that include the old table with new item 
    if(item.itemName !== ""){
      let table = JSON.parse(localStorage.getItem("mydata"));
      table.push(item);
      localStorage.setItem("mydata", JSON.stringify(table));
      setItems(table);
      setItem({ itemName: "", quantite: 1, itemStyle: "" });
    }

  }
  
  const increasing = (id)=>{
    // newTb is table that include the old table with object changed 
    let newTb = items.map((obj) => {
      if (obj.id === id) {
        return { ...obj, quantite: obj.quantite + 1 };
      }
      return obj;
    });
    // save the new table 
    localStorage.setItem("mydata", JSON.stringify(newTb));
    setItems(newTb);
  }

  const decreasing = (id)=>{
     let newTb = items.map((obj) => {
       if (obj.id === id) {
         return { ...obj, quantite: obj.quantite - 1 };
       }
       return obj;
     });
     localStorage.setItem("mydata", JSON.stringify(newTb));
     setItems(newTb);
     console.log(newTb)
  }

  const add_Line_through= (id)=>{
    let newTbl = items.map((obj) => {
      if (obj.id === id) {
        return { ...obj, itemStyle:" Add_Line_through" };
      }
      return obj;
    });
    localStorage.setItem("mydata", JSON.stringify(newTbl));
    setItems(newTbl)
    
  }

  return (
    <div>
      <div>
        <div className="d-flex justify-content-center p-5">
          <div className="bg-dark p-5 rounded-4 w-50">
            <form action="" className="">
              <div className="row">
                <div className="col-8">
                  <input type="text" className="form-control" placeholder="Enter item name " onChange={handlChange} value={item.itemName} />
                </div>
                <div className="col-4">
                  <button
                    className="btn btn-primary w-100" onClick={addItems}
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
            <div className='text-light pt-4'>
              {
                items ?(
                  <div>
                  {
                  items.map((elem)=>{
                    total += elem.quantite
                    return (
                    <div className='row pt-2 pb-2'>
                      <div className={`col-8 ${elem.itemStyle} `} onClick={()=>add_Line_through(elem.id)} >
                        {elem.itemName}
                      </div>
                      <div className="col-4 row p-0">
                        <div className="col-4 p-0">
                          <button className='btn btn-light' onClick={()=>decreasing(elem.id)}>&lt;</button>
                        </div>
                        <div className="col-4 text-center p-0">
                          <b className='p-3'> {elem.quantite}</b>
                        </div>
                        <div className="col-4 p-0 text-end">
                          <button className='btn btn-light' onClick={()=>increasing(elem.id)}>&gt;</button>
                        </div>
                      </div>
                      
                    </div>
                  )}
                  )}
                  <div className='text-end mt-4'>
                    Total: {total}
                  </div>
                  </div>
                ):(
                  <div></div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items