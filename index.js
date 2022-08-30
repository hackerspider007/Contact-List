//what is shortcut command to kill a server in windows command?
// Ctrl + C

//What is express.js ??
//Express is the most popular Node.js framework .

//shortcut command to clear terminal in windows command?
//cls

/* 
Also, before I got it to work in node, I had to do npm install and npm install express. What's that about?

NPM is a package repository service that hosts published JavaScript modules.
 npm install is a command that lets you download packages from their repository.

npm install express is a command that downloads and adds the express modules to
 the node_modules folder. So that we can use it later on in our code.
*/

/*What are modules?
 Modules are a way to split an application into separate files instead of 
 having all of your application in one file.
 */

/*
What is this "require?"

require() is not part of the standard JavaScript API. 
But in Node.js, it's a built-in function with a special purpose: to load modules.
*/
const { urlencoded } = require("express");
const express = require("express");
/* 
In my code , const express= require("express"); loads
the express module .This "express" module is present 
inside the noed_modules folder . 
This allows our code to acess the functionallity 
of the express.js clients API via the express variable.

*/
const port = 8000; //this is the port number on which the localhost will run
//what is a port ???
/*
Port's are endpoints of communication; on the server-side we have our listener. 
Valid port numbers can be 1 through 65535, but we a lot of the lower numbers 
are defaulted to certain processes. From what I’ve seen, people tend to use
 higher numbers like 3000, 5000, 8000 and 8080, but most of the time 
 it doesn’t seem to matter what the number is if you’re working on your
  own stuff, but it’s a good idea to console.log that port number in the
   listen method so you remember which localhost to navigate to.
*/
//What is Node.js??
//Node.js is an asynchronous event-driven JavaScript runtime,
//Node.js is designed to build scalable network applications.

// we must require or import the mongoose file to use it in our code
const db= require('./config/mongoose') ; 

//this contact here will be used to create enteries in the database or the collection
//will be populated using this. 
const Contact = require('./models/contact');

const app = express(); //Creates an Express application.
// The express() function is a top-level function exported by the express module.
//This express module or folder is present inside the node_modules folder
//The app object conventionally denotes the Express application.
//Create it by calling the top-level express() function exported by the Express module.
//Here app is an object and we are using different properties of this object to create
//our server using the different properties of this object.

//USING TEMPLATE ENGINES --------------->>>>>
//What are template engines????

/*A template engine is simply a way to turn static documents into dynamic ones.

Assume we have a template like this:

Welcome Jeremy

This doesn't help much, but if we turned it into a dynamic tempalte

Welcome {{name}}

We can tell the Backend to render any name we want. The backend could change
 the name based on input from a form, from the url, from a cookie, anything really.
  So it makes the documents able to work with a wider range of inputs.

As for what a template language does.

Basically you write templates out, then at run time (when the backend get's ready 
to send a document back to the browser) the backend "compiles" the templates.
 To do this it simply finds all the place holders (e.g. {{name}}) and 
 replaces them with a variable (or something else depending on the templating language).
  That's all. It's incredibly simple, but very very useful.
  Examples of template engines in express.js -->> ejs,pug,handlebars....etc
*/

const path = require("path"); // we must require path package from node_modules folder to use it in our code as path is an inbuilt module in node.

app.set("view engine", "ejs"); // What will this line do??
//This line of code: app.set('view engine', 'ejs'), tells our
//express application that we want to use EJS as our template engine.
//This line creates a property inside the app
//object "view engine" and sets its value to
//the given value i.e "ejs" .

//What is app.set used for??
/*app.set() is used to
assign setting name to value. You may store any value that you want,
 but certain names can be used to configure the behavior of the server
 Calling app.set('foo', true) for a Boolean property is the same as
  calling app.enable('foo'). Similarly, calling app.set('foo', false) 
  for a Boolean property is the same as calling app.disable('foo').

  app.set('title', 'My Site') // creating a property inside app object "title" and setting it's value as "My Site".
  //Retrieve the value of a setting(here "title") with app.get().
  app.get('title') // this line will fetch the value of "title" from app object.The fetched value will be "My Site".
*/

//by default the compiler will look for views directiory(or folder) and when it will not find it
// as we can change it's name then we will get error. So we must specify the path of the
//folder to be used as the path of the

//__dirname is an environment variable that tells you the absolute path
//of the directory containing the currently executing file.

//path.join() will join the path of the current directiory i.e contactList and "ejsFiles".
// "abcdef" is the name of the folder that contains the home.ejs file.
//__dirname will give us the path of the current folder as String and we will simply append or join
//the name of the folder that contains the home.ejs file.
//__dirname will give "E:\Microsoft VS Code\Node-js\express.js\contactList"now we will simply
//append "ejsFiles" or the name of the folder that contains the ejs fies to it .
//Appending "ejsFiles" will give us the path of the folder that contains ejs files.
//After appending or joining the name of the folder i.e "ejsFiles" to the String returned by
//__dirname we get --------------------->>>>>>>>>>>
// "E:\Microsoft VS Code\Node-js\express.js\contactList" + "ejsFiles" = "E:\Microsoft VS Code\Node-js\express.js\contactList\ejsFiles"
app.set("views", path.join(__dirname, "ejsFiles")); // Now finnaly this line of code will
//create a property "views" in app object and set it's value as
//path.join(__dirname, "name of folder containing ejs files") i.e path.join(__dirname, "ejsFiles").
// Now as we have seen above the output of path.join(__dirname, "ejsFiles") is the path of the folder
// that contains the ejs files i.e "E:\Microsoft VS Code\Node-js\express.js\contactList\ejsFiles" String.

//What was the need to use __dirname here instead of directly hard coding the path??
//We have used __dirname instead of hard coding the path and providing it as string becase suppose we are working
//on a project in a team and this code is being used by some other team member in some other directiory then
//he will have to change the path of the directory here and that will create a lot of mess.
//So to avoid that we have simply put __dirname ,so it will automatically fetch the path of the active directiory.
console.log("Path of current directory contactList is", __dirname);
console.log(
  "Path of directory that contains ejs files i.e folder ejsFiles is",
  path.join(__dirname, "ejsFiles")
);

//Using bodyparser middleware of node.js to parse the data entered in the form once the form is submittted.

/* What is a bodyparser??

Body Parser is a middleware of Node JS used to handle HTTP POST request. 
Body Parser can parse string based client request body into JavaScript Object 
which we can use in our application.

app.use([path,] callback [, callback...])
Mounts the specified middleware function or functions at the specified path: 
the middleware function is executed when the base of the requested path matches path.
  path	--> The path for which the middleware function is invoked. default value:--> '/' (root path)
  callback ---->	Callback functions; can be:
                                A middleware function.
                                A series of middleware functions (separated by commas).
                                An array of middleware functions.
                                A combination of all of the above.
    What is a middelware ???
    Middleware functions are functions that have access to the request object (req), 
    the response object (res), and the next middleware function in the application’s request-response cycle.
    The next middleware function is commonly denoted by a variable named next.

    express.urlencoded()  -->The express.urlencoded() function is a built-in middleware function in Express.
     It parses incoming requests with urlencoded payloads and is based on body-parser.

     Syntax: express.urlencoded( [options] )

    Parameter: The options parameter contains various property like extended, inflate, limit, verify etc.
    Return Value: It returns an Object.

*/
app.use('/',express.urlencoded({ extended: true }) );

// //making custom middlewares 
// //middleware 1
//   app.use(function(req,res,next){
//     // now as we know that middleware's can be used to change request or response data.
//     // So, let's try changing request object's data.
//     req.myName="Captain America";//here we have changed the name of the key from name to myName. 

//     console.log("middleware 1 is called");
    
//     //We use next() function to call the next middleware function if the response of the 
//     //current middleware is not terminated.If we do not use next() then the browser will keep on loading 
//     //as the code after this middleware function will never execute because we are not telling it to execute.

//     return next();//We must always use return along with next() because if we don't do it,
//     // and we have written some lines of code after next() then  we risk triggering the 
//     //callback a second time later, which usually has devastating results.
//     //However, if you we use return next(), it will jump out the callback immediately 
//     //and the code below return next() in the callback will be unreachable.
//   });

// /* When we are not submitting the form and simply navigating different urls of our app
//   then, first the middleware1 will get fired and then next() transfers the control 
//   to the next middleware i.e middleware 2 and now, the second middleware will execute . So we
//   will see "middleware 1 is called" and then "middleware 2 is called" on the next line.

//   The middleware's will also get trigered when we use post request, i.e we try to submit 
//   the form on the homepage.

//   Now, when we submit the form then, the middleware 1 and middleware 2 will be called twice let's try to 
//   understand why this happened.

//   middleware 1 and middleware 2 are called twice as there are 2 url's getting called
//    first the browser submits the form , app.post is responsible for that and middleware 1 
//    and middleware 2 gets called and it goes to app.post('/create-contact',function(){ }); , 
//    this app.post() in return will tell the browser to go back to the homeage for calling 
//    the homepage app.get("/", function (req, res) { } function is responsible so, 
//    again middleware 1 and middleware 2 are called and then it returns or renders the homepage back.

//    Browser makes a request sends the data that data is saved and then it tells the browser to go back to homepage res.redirect('/');.
//    So, two routes are being called first create-contact app.post('/create-contact',function(){ });
//     and then this get function app.get("/", function (req, res) { } renders the homepage.
// */

//   //middleware 2
//   app.use(function(req,res,next){
//     //we can also over-ride the values of middlewares
//     req.myName="mr robot";

//     // let's try acessing myName here
//     console.log("acessing req.myName from middleware2 ", req.myName);

//     console.log("middleware 2 is called");
//     return next();

//   });

  // Serving static files like css,javascript and image files
  //for serving static files we use a built in middleware of express i.e express.static
  /* express.static() ---> The express.static() function is a built-in middleware function in Express.
   It serves static files and is based on serve-static. 
   Syntax: express.static(root, [options])
  Parameters: The root parameter describes the root directory from which to serve static assets. 
  Return Value: It returns an Object.*/
  app.use(express.static("assests"));


//Returning Response From The Server that we created using app.get()
/*  What is app.get and what does it do ??
app.get() is a function that tells the server what to do when a get request at
 the given route is called. It has a callback function (req, res) that listen 
 to the incoming request req object and respond accordingly using res response object.
  Both req and res are made available to us by the Express framework.

The req object represents the HTTP request and has properties for the 
request query string, parameters, body, and HTTP headers.
 The res object represents the HTTP response that an Express 
 app sends when it gets an HTTP request.
*/

/* res.send() --->>
Sends the HTTP response.
The body parameter can be a Buffer object, a String, an object, Boolean, or an Array. 

For example:

  res.send(Buffer.from('whoop'))
  res.send({ some: 'json' })
  res.send('<p>some html</p>')
  res.status(404).send('Sorry, we cannot find that!')
  res.status(500).send({ error: 'something blew up' })

*/
/*      The path meanings:
 / is the root of the current drive;
 ./ is the current directory;
 ../ is the parent of the current directory. */

//creating the contact list
var contactList = [ ];

app.get("/", function (req, res) {
// let's try acessing myName here
  // console.log("Acessing myName from get route controller",req.myName);

  // res.send("<h1>Cool It is runnig !!!!! or is it ???</h1>");
  //In Express, you can only use res.send() or res.json() or res.end() once per request.
  //When you execute those, it sends the request. If you try to send more on the
  //same request, it will do nothing and will show a warning in Express.

  //Why we cannot use res.end multiple times in a single callback function??
  /* 
  res.send implicitly calls res.write followed by res.end. 
  If you call res.send multiple times, it will work the first time.
   However, since the first res.send call ends the response, you cannot
    add anything to the response.

    response.send sends an entire HTTP response to the client, including headers 
    and content, which is why you are unable to call it multiple times. 
    In fact, it even ends the response, so there is no need to call 
    response.end explicitly when using response.send.
  */
  // res.send("<p>some html</p>"); //this will not work unless we comment the above res.send()

    //What is find() in Mongoose?
    //Mongoose’s find() method is a query to retrieve a document or documents that match a particular filter.
    //Sytax :--
    /*
    *******--------- Using a callback or callafter function ------------------*******
    Model.find([filter], callback)//here the filter is optional if we do not put filter then all the elements
    from the database will be returned. But if we put the filter here then the data that satisfies that filter
    will only be returned by this function.

    *******--------- Using async and await ------------------*******
    const ourQuery = await Model.find([filter]);

    Return value
    The returned value could be an array of documents, a single document if it matches only one,
     or an empty array if no document is matched.
    */

  Contact.find({},function(err,contacts){
    /*Here this fnd() will return all the elements from the database as we have not put any filter in {}.
      If we add new elements to the database then this will return the updated array of documents 
      and we are passing that array to the ejs file(index.ejs) to render it on the screen.
    */
      if(err){
        console.log("Error in fetching contatcs from databse");
        return;
      }

   //What is res.render() ??
   //The res.render() function is used to render a view and sends the rendered HTML string to the client.
  /*
    And to render the home.ejs, we need to use the render method of the res object and pass 
    the name of the ejs file without providing the .ejs extension.
    Express will automatically search for the file with .ejs extension inside the default views directory.
  */

  return res.render("home", {
    //adding return to the res.render() is a good coding practise and it must be followed 
    //if we do not have a solid reason to omit it i.e if we want to execute some lines of code
    // after rendering the page
    title: "Contact List",
    contactList: contacts,
  });

  });

 
});

app.post("/create-contact",function(req,res){

    //using the Contact model to create a contact document and populating the database.
    ///we will use the create() of mongoose to create a document.
    // once the document is created each document or every new contact entry in the 
    //database will have a unique id
    //which will help us in deleting them from database and displaying them on screen.
        Contact.create({
          
          name:req.body.name,
          phone:req.body.phone

        } , function(err,newContact){ //this is a callback function it is a part of the syntax
          // to handle errors and redirect the user 
          //if contact document is created sucessfully.
            if(err){
              console.log("error in creating contact");
              return;
            }
            console.log("***********",newContact);
            return res.redirect('back');
        } );

    // now , we need to add this req.body (because the req.body is the newly entered contact) 
    //so,it must be added to the contact list. So,we append it to the array contactList.
    // contactList.push(req.body);//The push() method adds new items to the end of an array.

    //now we would want the browser to redirect us to to a page in ths case we need to redirect 
    //to the same page as the contactlist is displayed on the same page. 
    // res.redirect('/');//here we could have also written back in the url and it would have taken us to the same page as we are on currently. 
});

//rendering 2nd ejs page prctice.ejs
let mascots = [
  { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
  { name: "Tux", organization: "Linux", birth_year: 1996 },
  { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
];

let tagline = "No programming concept is complete without a cute animal mascot.";

var r;
var res_locals;

app.get("/practice", function (req, res) {//here app.get is an asynchronus function the below code 
  //registers a route handler that Express will call when it receives an HTTP GET request to /practice
  //Express will call it only when the server is up and running and the server will run once the code 
  //reaches app.listen() which is defined at the last of this code due this reason the 
  //callback function inside this app.get() will run only after the  
  //running and express will recieve a get request to /practice. So javascript will not
  // be able to set the value of
  // res_locals even when the server is created. Value of res_locals will only be set when express recieves
  // a get request to /practice but console.log() on line 277 will not wait for the callback function to execute
// and it is written outside of app.get() ,So it will print undefined as it's value will only be set when 
//the callback function inside this app.get executes.
  r = res;
// assigning values to res.locals
// res.locals.tagline=tagline;
// res.locals.arrayOfObjects=mascots;

  res_locals = res.locals;
  console.log("response object", res);
  console.log("response.locals object", res.locals);

  return res.render("practice", {
    //Why are we adding return statment with every res.render()??
    //Ans --------------->>
    //If this is the last statment in the controller and it is rendering  view ( res.render() ) or
    //it is sending a response ( res.send() ) to the client or user then we need to return it we can not just
    //leave it like that because if we do not do so then it will keep on finding
    //the next statments and trying to execute it if there is no other statment after this line then it is fine but
    //it is a good coding practice to add return statment after res.render() or res.send().
    // We will tell the function that we are gonna return  from here.
    title: "Let us play with ejs",
    mascots: mascots,
    tagline: tagline,
    res_locals:res_locals,
  });


});

//What is app.listen here and what will it do?
/* 
app.listen() is the function that starts a port and host, in our case the 
localhost for the connections to listen to incoming requests from a client.
 We can define the port number such as 8000(in our case). 

app.listen will bind and listen for connections on the specified host and port.
*/

/*
why app.listen() should be added at the end of the code always in node.js?

It is mostly used as a convention to use a logical and safe order of 
initialization where we configure the server first before starting it 
and exposing it to incoming connections.
*/

app.get('/delete-contact',function(req,res){
// finding the document to be deleted from the database by id as every document in the database has a unique id.
    //
    let id=req.query.id;
    console.log("req.query",req.query);
    console.log("id of the document to be deleted",id);
    // finding the contact in the database using the id and delete it for this we are gonna use 
    //Model.findByIdAndDelete() function of mongoose.
    Contact.findByIdAndDelete(id,function(err){
        if(err){
          console.log("error in deleting the document from database");
          return;
        }
        res.redirect('back');
    });

});

// Editing the contact

  app.get('/update-contact',function(req,res){
// finding the document to be updated from the database by id as every document in the database has a unique id.
    let id=req.query.id;

    Contact.findByIdAndUpdate(id,{ name: "Tabish",
                                  phone:"9334290345" },
        function(err,docs){
            if(err) {
              console.log("error encountered while updating contact",err);
              return;
            }
            console.log("Updated contact : ", docs);
            return res.redirect('back');
    });
  });


app.listen(port, function (err) {
  /*
  The app returned by express() is in fact a JavaScript Function, designed to be passed
  to Node’s HTTP servers as a callback to handle requests. This makes it easy to provide
   both HTTP and HTTPS versions of your app with the same code base, as the app does
   not inherit from these (it is simply a callback):

  const express = require('express')
  const https = require('https')
  const http = require('http')
  const app = express()

  http.createServer(app).listen(80) // creating a http and https versions of the same server
  https.createServer(options, app).listen(443)
   */
  if (err) {
    console.log("Error encountered!!");
    return;
  }
  console.log("Yup my Express.js server is running on port:", port);
});

// app.listen(port); // Why the server is node starting whenever we use this line. The
// server gets stuck at a particular stage why ????
