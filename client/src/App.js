import './App.css';
import React,{useState} from 'react';
import axios from "axios";
function App() {
  const [temperature,setTemperature]=useState("");
  const [city,setCity]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.get(`http://localhost:3002/getWeather?city=${city}`).then((response)=>{
      
      setTemperature(response.data);
    })
    .catch((error)=>{
      console.log(error);
      alert(error);
    })
  }
  return (
    <div className="App">
      <div className='nav'><h1>Arya's Weather App</h1></div>
      <div className='formcontainer'>
        <form onSubmit={handleSubmit}>
          <input className='city' value={city} onChange={(e)=>setCity(e.target.value)}></input>
          <button type="submit">Submit</button>
        </form>
        <div>The current temperature of {city} is {temperature}K</div>
      </div>
    </div>
  );
}

export default App;
