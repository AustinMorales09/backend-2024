const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());
// Routes
const attractionsRouter = require('./routes/attractions')
app.use('/attractions', attractionsRouter)
app.get('/', (req, res) => res.render('home'));
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
// Connect to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, })
.then((result) => app.listen(3000))
.catch((err) => console.log(err));
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB database connection established succesfully");
})