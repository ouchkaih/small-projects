import React, {useState} from 'react'

function Controler() {
    const [temperature, setTurmperature] = useState(30)
    const [bgTemperature, setBgTurmperature] = useState("bg-danger")
    const increasing = ()=>{
        setTurmperature(temperature+1)
        changeBg()

    }
    const decreasing = ()=>{
        setTurmperature(temperature-1)
        changeBg()
    }
    const changeBg= ()=>{
        if(temperature > 15 ){
            setBgTurmperature("bg-danger")
        }else{
           setBgTurmperature("bg-primary");
        }
    }

  return (
    <div>
      <div className=" d-flex justify-content-center align-items-center p-5 ">
        <div className="bg-dark text-light p-5 rounded-4">
          <div className={`text-center p-5  rounded-pill  ${bgTemperature} `}>
            {temperature} C
          </div>
          <div className="row mt-5">
            <div className="col-6">
              <button
                className="btn rounded-pill btn-light"
                onClick={increasing}
              >
                +
              </button>
            </div>
            <div className="col-6">
              <button
                className="btn rounded-pill btn-light"
                onClick={decreasing}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controler