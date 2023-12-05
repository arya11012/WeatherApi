import axios from "axios";
import express from "express";
import cors from "cors";

const PORT =3002;
const app=express();
app.use(express.json());

const corsOptions={
    optionsSuccessStatus: 200,
};


app.use(cors(corsOptions));
app.get("/getWeather",async(req,res)=>{
    const {city}=req.query;
    const api_key="76cee35d54ce9b05286772e928ff00d9";
    const url2=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api_key}`;
    const res_lat_lon=await axios.get(url2);
    const lat=res_lat_lon.data[0].lat;
    const lon=res_lat_lon.data[0].lon;

    const url1=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
    const res_temp=await axios.get(url1);
    const temp=res_temp.data.main.temp;
    res.json(temp);
})

app.listen(PORT,()=>{
    console.log("App is running successfully");
})