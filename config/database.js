const mongoose = require('mongoose');

// 🚨 Don't forget to add your username and password to your connection URI

const dbName = 'expresstagram'

const connectionURI = `mongodb+srv://admin:pepper22@cluster0.esjr1.mongodb.net/${dbName}?retryWrites=true&w=majority`

// shortcut to mongoose.connection object
const db = mongoose.connection;

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});