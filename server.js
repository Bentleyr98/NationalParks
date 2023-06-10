const express = require('express')
const app = express()
const port = 8080
require('mongodb').MongoClient;
const mongodb = require('./database/db');
const bodyParser = require('body-parser');
const cors = require('cors');
app.set('view engine', 'ejs');




app.use(bodyParser.json())
.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
})
.use(cors())
.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes"));


mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
}});