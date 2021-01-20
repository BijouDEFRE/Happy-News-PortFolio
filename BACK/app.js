// require environment modules npm
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// require project modules
const router = require('./app/routers');
// express server creation
const app = express();
// call express middleware to manage POST data
app.use( express.urlencoded({extended: true}) );
// call express middleware for json data reading 
app.use(express.json());
// authorize data echange between different websites
app.use(cors('*'));

app.use(router);
// start server on port
app.listen(process.env.PORT || 3000, () => {
    console.log('API is ready on :', process.env.PORT);
});