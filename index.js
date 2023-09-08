const express = require('express');
require('dotenv').config();





// import routes
const imageRouter = require('./images');
const weatherRouter = require('./weather');



// const imageRouter = express.Router();

// Running express server
const app = express();
const port = process.env.PORT || 8000;



// route middlewares
app.use('/images',  imageRouter);
app.use('/weather',  weatherRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at port:${port}`);
});

module.exports = app;
