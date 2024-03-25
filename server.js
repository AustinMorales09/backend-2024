// Import required modules
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');
const adoptRoutes = require('./routes/adoptroutes')
const productRoutes = require('./routes/productroutes')
const contactRoute = require('./routes/contactroute')


// Create an Express application
const app = express();

// Set up middleware for parsing JSON
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json());
app.use(cors());
// app.use(bodyParser.json());
// Connect to MongoDB using Mongoose

const db = mongoose.connection;

//connecting Contact.js
const dbURI = 'mongodb+srv://Kable:Kable@cluster0.icrx39b.mongodb.net/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('Server running')))
  .catch(err => console.error(err));
  
// Handle MongoDB connection errors
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

app.use('/pets', adoptRoutes)

app.use('/products', productRoutes)

app.use('/contact', contactRoute)

// Define routes
app.get('/pets', (req, res, next) => {
  res.send('Welcome to the adoption center!');
});

app.get('/products', (req, res, next) => {
  res.send('Welcome to the pet supplies shop!');
});

app.get('/Contact', (req, res, next) => {
  res.send('Leave us a message!');
});


// Example route to handle POST requests
// app.post('/example', async (req, res) => {
//   const exampleData = new ExampleModel({
//     name: req.body.name,
//     description: req.body.description
//   });
//   try {
//     const savedExample = await exampleData.save();
//     res.json(savedExample);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
