# Getting Started 

## Create Node.js App

we initialize the Node.js App with a package.json file:
we install necessary modules: bcryptjs, body-parser, cors, dotenv, express, joi, jsonwebtoken, nodemon, pg.

``` js
npm init -y
npm i express pg cors dotenv jsonwebtoken bcryptjs 
```

## Setup Express web server

In the root folder, we created a new app.js file like this :

``` js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./app/routers');

const app = express();

app.use(cors("*"));
const bodyParser = multer();
app.use(bodyParser.none());
app.use(express.urlencoded({ extended: true }))
app.use(router);

app.listen(process.env.PORT || 3000, () => {
    console.log('API is ready on :', process.env.PORT);
});
```

## Run web server

In the package.json file, we created scripts files like this :

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
},
```