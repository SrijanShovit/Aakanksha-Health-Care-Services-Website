const express = require('express');
require('colors');
const db = require('./config/database');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config({ path: './congif/.env' });
app.use(cors());

app.use(hpp());

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
