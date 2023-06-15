const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
// const authRoutes = require('./routes/authRoutes');
// const { requireAuth, checkUser } = require('./middleware/authMiddleware');
require('dotenv').config();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// Routes
// const artsRouter = require('../backend/routes/arts')
// const familyRouter = require('../backend/routes/family')
// const foodRouter = require('../backend/routes/food')
// const historyRouter = require('../backend/routes/history')
// const outdoorsRouter = require('../backend/routes/outdoors')
// const sportsRouter = require('../backend/routes/sports')
   const attractionsRouter = require('./routes/attractions')
   // const authRoutes = ('../routes/authRoutes')
// app.use('/arts', artsRouter)
// app.use('/family', familyRouter)
// app.use('/food', foodRouter)
// app.use('/history', historyRouter)
// app.use('/outdoors', outdoorsRouter)
// app.use('/sports', sportsRouter)
   app.use('/attractions', attractionsRouter) 

app.get('/', (req, res) => res.render('home'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
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
