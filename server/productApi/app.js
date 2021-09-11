const express = require('express');
const Product = require('./models/Product');
require('colors');
const cors = require('cors');
const db = require('./utils/db');
const app = express();

app.use(cors());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

Product.sequelize
  .sync()
  .then(() => {})
  .catch((err) => console.log(err));

const productRoute = require('./routes/productRoute');

// Mount routers
app.use('/product', productRoute);

app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    'INSERT INTO user(username,password) VALUES(?,?)',
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send('value inserted');
      }
    }
  );
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    'SELECT * FROM user WHERE username=? AND password=?',
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: 'Wrong username/password' });
      }
    }
  );
});

app.listen(5000);
console.log('Listening to port 5000...'.blue.bold);
