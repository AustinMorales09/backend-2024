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
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, })

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB database connection established succesfully");
})


const attractionsRouter = require('./routes/attractions')
app.use('/attractions', attractionsRouter)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
// app.get('/', (req, res) => res.render('home'));
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Connect to MongoDB
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
}