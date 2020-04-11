var express = require('express');
var port = process.env.PORT || 3000;
var bodyparser= require('body-parser'); 
const path=require('path')
const hbs=require('hbs')
// var firebase = require('firebase');
// require('firebase/auth');
// require('firebase/database');

var app = express();
app.set('view engine','hbs')


publicDirectoryPath=path.join(__dirname,'../public');
// app.set('views',path.join(__dirname,'../template/views'))
hbs.registerPartials(path.join(__dirname,'../template/partials'))

//this will search the directory and will render the page if it gets index.html since index.html has a special meaning
//setup static directory to serve
var urlencodedParser = bodyparser.urlencoded({ extended: false });
app.use(express.static(publicDirectoryPath))

// Initialize Firebase for the application
// var config = {
//     apiKey: "AIzaSyC76ppxHaf8fiI7k8FwL0Im4zk90--0VxU",
//     authDomain: "umid-9b6d5.firebaseapp.com",
//     databaseURL: "https://umid-9b6d5.firebaseio.com",
//     projectId: "umid-9b6d5",
//     storageBucket: "umid-9b6d5.appspot.com",
//     messagingSenderId: "82905971216",
//     appId: "1:82905971216:web:9866931a9ab983adf36895",
//     measurementId: "G-N704C5HJKF"
//   };

//   firebase.initializeApp(config); 
  app.get('/',(req,res)=>{
        res.render('captcha.hbs');
  });

//   app.post('/',urlencodedParser,(req,res)=>{
//       res.send({});
//   })

  app.listen(port,()=>{
      console.log("listening");
      
  })