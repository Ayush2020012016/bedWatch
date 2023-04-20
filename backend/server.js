const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();
require("dotenv").config({ path: "./config.env" });
const port = process.env.port || '4000';
app.use(express.json());
app.use(require("./routes/record"));
const dbo = require("./db/conn");




app.use(cors());



app.get('/',(req,res)=>{
    res.send("hi i am here")
})

app.listen(port,()=>{console.log("process started at port" + port)})