const express = require('express');
// var upload = multer({ dest: 'uploads/' })

// const port = 8000;
const port = process.env.PORT || 8000;
// console.log(process.env.PORT);

const app = express();

const db = require('./config/mongoose');

const TeamCrewMembers = require('./models/team_crew_member');
const TeamCrewCompanies = require('./models/companies');

// app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));


const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

// use express router
app.use('/',require('./routes'));

app.use(express.static('./assets'));

// set the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
// app.use(path.join(__dirname, '../views'));


app.use(expressLayouts);
app.listen(port, function(err){
    if(err){
        console.log('Error: ', err);
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});