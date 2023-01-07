import React,{useEffect, useState} from 'react'
import axios from "axios";
import "./weather.css"
function Weather() {
   
 const [weatherData, setWeatherData] = useState({});
 const [city, setCity] = useState("")
 const [image, setImgage]=useState("")
 const [date,SetDate] =useState(new Date())
 const handlChange = (e)=>{
    setCity(e.target.value);
 }




 const search = (e)=>{
    e.preventDefault()
  axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c23967b93e4c579667ed47267852811`
    )
    .then((response) => {
      setWeatherData(response.data);
      console.log(response.data);
      console.log(response.data.weather[0].main);
      switch (response.data.weather[0].main) {
        case "Clouds":
          setImgage("/weather/cloud.png");
          break;
        case "Thunderstorm":
          setImgage("/weather/icons8-rain-96.png");
          break;
        case "Rain":
          setImgage("/weather/icons8-rain-96.png");
          break;
        case "Snow":
          setImgage("/weather/icons8-snow-96.png");
          break;
        case "Sun":
          setImgage("/weather/icons8-sun-96.png");
          break;
        default:
          setImgage("/weather/icons8-sun-96.png");
      }
    })
    .catch((err) => {
      console.log(err);
    });

    
 }

  return (
    <div>
      <div className="d-flex justify-content-center ">
        <div className=" Bg_container bg-light rounded-4">
          <div className="p-5 bg_contrasted text-light">
            <form action="" className="">
              <div className="row">
                <div className="col-10">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search"
                    onChange={handlChange}
                  />
                </div>
                <div className="col-2 ">
                  <button className="btn btn-primary" onClick={search}>
                    search
                  </button>
                </div>
                {weatherData.name ? (
                  <div className="text-center mt-4">
                    <div className="">
                      <h4>
                        <b>
                          {weatherData.name}, {weatherData.sys.country}
                        </b>
                      </h4>
                    </div>

                    <div>
                      <i>{date.toString()}</i>
                    </div>
                    <div className="bg-dark pt-4 pb-4 mt-4 mb-4 rounded-3 degBg ">
                      <h3>
                        {(weatherData.main.temp / 12.83492201039861).toFixed(2)}{" "}
                        °C
                      </h3>
                    </div>
                    <div>
                      <b>
                        <h3>{weatherData.weather[0].main}</h3>
                      </b>
                    </div>
                    <div>
                      <img src={image} alt="" />
                    </div>
                  </div>
                ) : (
                  <h2></h2>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather


