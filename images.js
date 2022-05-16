// require express and it's router component
const express = require('express');
require("dotenv").config();
let fetch = require("node-fetch-commonjs");
const cors = require("cors");


const API_URL = `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_IMAGE_KEY}&orientation=landscape&count=5`;
const ORIGIN = process.env.ORIGIN;

console.log('ORIGIN', ORIGIN);

const imageRouter = express.Router();

imageRouter.use(cors());
const corsOptions = {
  origin: ORIGIN,
};

// require the middlewares and callback functions from the controller directory
// const { create, read, removeTodo } = require('../controller');

// Create POST route to create an todo
// router.post('/todo/create', create);
// Create GET route to read an todo
imageRouter.get('/', cors(corsOptions), async (req, res) => {
    let data = await fetch(API_URL);
    // console.log('response1111', data);
    const json = await data.json();
    if (json) {
        res.json(json);
      } else {
        res.status(404).send();
    }
});
// Create DELETE route to remove an todo
// router.delete('/todo/:id', removeTodo);

module.exports = imageRouter;
