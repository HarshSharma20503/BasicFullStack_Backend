const express = require('express');
const app = express();


app.get('/hello',(req,res) => {
    res.send("hello");
})

app.get('/',(req,res) => {
    res.send("Home");
})

app.listen(3000, ()=>{
    console.log("Node API is running on port 3000");
})