const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/product')
require('dotenv').config();

import {RoutersPath} from "./types";

const database = process.env.DATA_KEY
const port = process.env.PORT || 3001


const app = express()

app.use(RoutersPath.products, productRoutes)

function start() {
    try {
        mongoose.connect(database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('DB connection')
        })
        app.listen(port, () => {
            console.log('Server listening on port')
        })
    } catch (err) {
        console.log(err)
    }
}

start()
