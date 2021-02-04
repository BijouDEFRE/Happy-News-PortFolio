// require environment modules npm
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// require project modules
const router = require('./app/routers');
// require package for upload files
const multer = require('multer');
// express server creation
const app = express();

// authorize data echange between different websites
app.use(cors('*'));
// app.use(cors({
//     origin: '*',
//     methods: 'GET,POST,PATCH,DELETE,OPTIONS',
//     allowedHeaders: 'Content-Type'
// }));
const bodyParser = multer();
app.use(bodyParser.none());
// call express middleware for json data reading 
app.use(express.static(path.join(__dirname, 'public')));
// call express middleware to manage POST data
app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// authorize data echange between different websites
// app.use(cors('*'));

app.use(router);
// start server on port
app.listen(process.env.PORT || 3000, () => {
    console.log('API is ready on :', process.env.PORT);
});