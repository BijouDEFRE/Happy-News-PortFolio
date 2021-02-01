// require environment modules npm
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// require project modules
const router = require('./app/routers');
// express server creation
const app = express();

app.use(cors({
    origin: '*',
    methods: 'GET,POST,PATCH,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type'
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// call express middleware for json data reading 
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    response.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, UPDATE, DELETE');

    if (request.method === 'OPTIONS') {
    res.sendStatus(200);
    }
    else {
        next();
    }
});

app.use(router);
// start server on port
app.listen(process.env.PORT || 3000, () => {
    console.log('API is ready on :', process.env.PORT);
});