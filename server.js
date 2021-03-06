// Require modules
const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || '3000'; 
const indexRouter = require('./routes/index')
const bandsRouter = require('./routes/bands')
const albumsRouter = require('./routes/albums')
const membersRouter = require('./routes/members')
const searchRouter = require('./routes/search')


// Set up express app
const app = express();

// Connect to DB
require('./config/database')

// Configure the app with app.set()
app.set('view engine', 'ejs');

// Mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Mount routes with app.use()
app.use('/', indexRouter)
app.use('/bands', bandsRouter)
app.use('/', albumsRouter)
app.use('/', membersRouter)
app.use('/', searchRouter)


// Tell App to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});