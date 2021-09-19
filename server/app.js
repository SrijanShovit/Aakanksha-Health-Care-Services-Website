const express = require('express');
require('colors');
const db = require('./config/database');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cors());

// cookie parser
app.use(cookieParser());

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Database connection
db.then(
  app.listen(5000, () => {
    console.log(`Listening to port 5000...`.cyan.bold);
  }),
  console.log('Connected to database.'.yellow.bold)
).catch((err) => {
  console.log(err);
  console.log('Error connecting to database !'.red.bold);
});

const productRoute = require('./routes/productRoute');
const authRoute = require('./routes/authRoute');
const campRoute = require('./routes/campRoute');

// Mount routers
app.use('/product', productRoute);
app.use('/auth', authRoute);
app.use('/camp', campRoute);
