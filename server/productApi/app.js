const express = require('express');
const Product = require('./models/Product');
const errorHandler = require('./middlewares/errorHandler');
const AppError = require('./utils/error');
require('colors');

const app = express();

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

Product.sequelize
  .sync()
  .then(() => {
    console.log('Connected to database.'.yellow.bold);
    app.listen(5000);
    console.log('Listening to port 5000...'.blue.bold);
  })
  .catch((err) => console.log(err));

const productRoute = require('./routes/productRoute');

// Mount routers
app.use('/product', productRoute);

// Unhandled routes
app.all('*', (req, res, next) => {
  next(new AppError(`Requested URL not found - ${req.url}`, 404));
  /* If we pass in an argument to next(), the function will assume that 
  argument is an error and thus proceed directly to the error handling middleware, here 'errorHandler' */
});

app.use(errorHandler);
