const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true,})
const connection = mongoose.connection;

connection.once('open', () =>{
  console.log("MongoDB database connection established succesfully");
})
// Routes

   const attractionsRouter = require('./routes/attractions')
   app.use('/attractions', attractionsRouter) 


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
//   });

// Connect to MongoDB
// comment
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
}