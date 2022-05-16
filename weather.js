// require express and it's router component
const express = require('express');
require("dotenv").config();
let fetch = require("node-fetch-commonjs");
const cors = require("cors");

const ORIGIN = process.env.ORIGIN;

// console.log('ORIGIN', process.env.REACT_APP_WEATHER_KEY);

const weatherRouter = express.Router();

weatherRouter.use(cors());
const corsOptions = {
  origin: ORIGIN,
};

// require the middlewares and callback functions from the controller directory
// const { create, read, removeTodo } = require('../controller');

// Create POST route to create an todo
// router.post('/todo/create', create);
// Create GET route to read an todo
weatherRouter.get('/', cors(corsOptions), async (req, res) => {
    let lat = req.query.lat;
    let lon = req.query.lon;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`;

    let data = await fetch(API_URL);
    
    const json = await data.json();
    // console.log('response1111', json);
    if (json) {
        res.json(json);
      } else {
        res.status(404).send();
    }
});
// Create DELETE route to remove an todo
// router.delete('/todo/:id', removeTodo);

module.exports = weatherRouter;
