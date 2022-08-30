// requiring the mongoose library
const mongoose = require('mongoose');

// Defining the schema

// what are schema's in mongo db?
/*
 A schema represents the structure of a particular document, either completely or just
 a portion of the document. It's a way to express expected properties and values as well as
  constraints and indexes. A model defines a programming interface for interacting 
  with the database (read, insert, update, etc).

  Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection
   and defines the shape of the documents within that collection.
*/

// Here name and phone are keys.
/*
  Each key in our code contactSchema defines a property in our documents which will be 
  cast to its associated SchemaType. For example, we've defined a property name which 
  will be cast to the String SchemaType and property phone which will also
  be cast to a String SchemaType.  
  If we want to add additional keys later, we can use the Schema.add method. 
  Here 'Schema' will be the name of that schema.
*/
const contactSchema = new mongoose.Schema({
       name: {
            type:String,
            required:true
        },
       phone: {
            type:String,
            required:true
        }

}); 

// Creating a model of the schema defined above
/*
What are models in mongoose?

A model is a compiled version of the schema. One instance of the model will map to 
one document in the database. It is the model that handles the reading, creating, 
updating, and deleting of documents.
A model is a representation of a database record as a nice object in your programming language
 of choice. In this case, our models will be JavaScript objects.
*/
/* Compiling a model
When we call mongoose.model() on a schema, Mongoose compiles a model for us. 

Explanation of the below written code :-
The first argument is the singular name of the collection your model is for. 
Mongoose automatically looks for the plural, lowercased version of your model name.
 Thus, for the example above, the model Contact is for the contacts collection in
  the database.
*/
const Contact = mongoose.model('Contact',contactSchema);
//Note: The .model() function makes a copy of schema. 
//Make sure that you've added everything you want to schema, 
//including hooks, before calling .model()!

//Why we need to export Contact mongoose model to use it in index.js for populating the collection 
//whereas we are not exporting the mongoose.js file in config folder to use it in index.js ??
//ans:--
//Once we require mongoose in mongoose.js file we can use it in the whole package i.e contactList in this case
//that's why we do not need to export mongoose.js file to import it in index.js whereas we need to export 
//the Contact model that we made in contatc.js file as it will only be available in that file so, 
//to use it in another file (i.e in index.js) we would need to export it from 
//contact.js then only we can import it in index.js or use it anywhere in index.js .
module.exports = Contact;