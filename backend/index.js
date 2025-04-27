const express= require('express');
const app=express();
require('dotenv').config()
const incidentRoutes=require('./routes/incident.routes');
const connectDb=require('./config/connectDb');

connectDb();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("Hello from the backend!")
})

app.use('/api/incident',incidentRoutes)

app.listen(process.env.PORT,()=>{
    console.log("Server is running on port",process.env.PORT);
})