const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
const cors = require('cors')

const FRONTEND = process.env.FRONTEND
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000

const app = express();


const corsOptions = {
    origin : FRONTEND,
    optonsSuccessStatus: 200
}

// middleware to parse json files
app.use(express.json());

app.use(cors(corsOptions))
//middleware to pare form url encoded
app.use(express.urlencoded({extended: false}))

// middle ware to use productRoute
app.use('/api/products', productRoute)


app.get('/',(req,res) => {
    res.send("Home page");
})

app.use(errorMiddleware)

// connection with database
mongoose.
connect(MONGO_URL)
.then(() => {
    console.log('connected to mongodb');
    app.listen(PORT, ()=>{
        console.log(`Node API is running on port ${PORT}`);
    })
})
.catch((error) => {
    console.log(error);
})
