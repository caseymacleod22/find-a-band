const mongoose = require('mongoose');


const dbName = 'project2'

const connectionURI = `mongodb+srv://admin:pepper22@cluster0.esjr1.mongodb.net/${dbName}?retryWrites=true&w=majority`

// shortcut to mongoose.connection object
const db = mongoose.connection;

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});


db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});