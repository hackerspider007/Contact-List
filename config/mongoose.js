// requireing the mongoose library


const mongoose= require('mongoose');

// connecting with database
mongoose.connect('mongodb://localhost/contacts_list_db');

// acquire the connection to check if it is sucessful
const db= mongoose.connection;

// If an error occurs then print the error on console using console.error.bind().
db.on('error',console.error.bind(console,'error connecting to database'));

// If the database is connected sucessfully then print the sucess message on screen.
db.once('open' ,function(){
    console.log("Sucessfully connected to the database");
});

