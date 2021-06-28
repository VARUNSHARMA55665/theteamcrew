const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/team_crew_db');
mongoose.connect('mongodb+srv://varun:vmv2021@cluster0.uhwsn.mongodb.net/team_crew_db?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to Mongoose"));

db.once('open',function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;