const express = require('express');
require('colors');

// import .env variables
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });

const db = require('./config/database');
const cors = require('cors');
const app = express();
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const errorHandler = require('./middlewares/errorHandler');

app.use(cors());

app.use(hpp());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Database connection
db.then(
  app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}...`.cyan.bold);
  }),
  console.log('Connected to database.'.yellow.bold)
).catch((err) => {
  console.log(err);
  console.log('Error connecting to database !'.red.bold);
});

// security
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());

// limit 100 requests per 10 mins
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});
app.use(limiter);

const productRoute = require('./routes/productRoute');
const authRoute = require('./routes/authRoute');
const campRoute = require('./routes/campRoute');
const doctorRoute = require('./routes/doctorRoute');
const userRoute = require('./routes/userRoute');

// Mount routers
app.use('/product', productRoute);
app.use('/auth', authRoute);
app.use('/camp', campRoute);
app.use('/doctor', doctorRoute);
app.use('/user', userRoute);

app.use(errorHandler);
