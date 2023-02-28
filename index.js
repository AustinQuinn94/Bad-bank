var express = require('express');
var app     = express();
var cors    = require('cors');
const dal   = require('./dal.js');

app.use(express.static('public'));
app.use(cors());

async function verifyToken(req,res,next){
    const token = req.headers.authorization;

    if(token){
        admin.auth().verifyIdToken(token)
           .then(decodedToken => {
                console.log("Decoded Token:", decodedToken);
                return next();
        }).catch(err => {
            return res.status(401).send('Unauthorized');
        })   
    }
    else {
        return res.status(401).send('No Token Found')
    }
}

//create user account
app.get('/account/create/:name/:email/:password', function (req,res){

    const params = req.params;
      // check if account exists
      dal.find(req.params.email).
      then((users) => {

          // if user exists, return error message
          if(users.length > 0){
              console.log('User already in exists');
              res.send('User already in exists');    
          }
          else{

    dal.create(params.name, params.email, params.password)
       .then(user => {
          console.log(user);
          res.send(user)
       });
   // res.send({
     //   name:     req.params.name,
       // email:    req.params.email,
       // password: req.params.password,
}})});
//find user account
app.get('/account/email', verifyToken, (req,res) => {
    dal.findOne(req.params.email)
       .then(user => {
        console.log(user);
        res.send(user)
       });
})
// log in
app.get('/account/login/:email/:password', function (req, res) {

    dal.find(req.params.email).
        then((user) => {

            // if user exists, check password
            if(user.length > 0){
                if (user[0].password === req.params.password){
                    res.send(user[0]);
                }
                else{
                    res.send('Login failed: wrong password');
                }
            }
            else{
                res.send('Login failed: user not found');
            }
    });
    
});
// update balance
app.get('/account/update/:email/:amount', function (req,res) {
    const params =  req.params;

    dal.update(params.email, parseInt(params.amount))
        .then(response => {
            console.log(response);
            res.send(response);
        });
});

// all accounts 
app.get('/account/all', function(req,res){
    
    dal.all()
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});

var port = 3000
app.listen(port);
console.log('Running on port: ' + port);

module.exports = function(api, options) {
    return {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current"
            }
          }
        ]
      ],
      plugins: [
        "@babel/plugin-transform-arrow-functions"
      ]
    };
  };