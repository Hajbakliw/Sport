const express = require('express');
const app = express();
const bodyParser = require("body-parser"); // import body parser module
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sportBD', { useNewUrlParser: true, useUnifiedTopology: true });

const Player = require('./models/player'); //import le model player
const Team = require('./models/team');
const User = require('./models/user');

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

// create express application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/getAllPlayers', (req, res) => {
    console.log('Am here into get Players');
    Player.find((err, docs) => {
        if (err) {
            console.log('error with DB');
        } else {
            res.status(200).json({
                allPlayers: docs
            });
        }
    })

});

app.post('/addPlayer', (req, res) => {
    console.log('Player Added', req.body);
    //insert ds DB
    const player = new Player({
        name: req.body.name,
        position: req.body.position,
        nbr: req.body.nbr,
        age: req.body.age,
        description: req.body.description
    })
    player.save().then(
        (data) => {
            if (data) {
                res.status(200).json({
                    message: 'Player Added with success'
                })
            }
        }
    )
});



app.get('/getPlayerById/:id', (req, res) => {
    console.log("Here in get by ID", req.params.id);
    Player.findOne({ _id: req.params.id }).then(
        (data) => {
            if (data) {
                res.status(200).json({
                    player: data
                })
            }
        }
    )
});

app.delete("/deletePlayer/:id", (req, res) => {
    console.log("Delete Player by ID", req.params.id);
    Player.deleteOne({ _id: req.params.id }).then(
        res.status(200).json({
            message: 'Player deleted with success'
        })
    );
});
app.put("/editPlayer/:id", (req, res) => {
    console.log("Edit player By ID", req.params.id)
    console.log("New Player", req.body);
});
// //************match*********
// app.get('/getAllMatches', (req, res) => {
//     console.log('Am here into get Matches');    
//     res.status(200).json({
//         allMatches: matches
//     })
// }
// )

// app.post('/addMatch', (req, res) => {
//     console.log('Match Added', req.body);
// }
// )
// //insert ds DB

// app.get('/getMatchById/:id', (req, res) => {
//     console.log("Here in get by ID", req.params.id);
// }
// )

// app.delete("/deleteMatch/:id", (req, res) => {
//     console.log("Delete Match by ID", req.params.id);
//     console.log("Edit Match By ID", req.params.id);
// });
// app.put("/editMatch/:id", (req, res) => {
//     console.log("Edit Match By ID", req.params.id);
//     console.log("New Match", req.body);
// });


//*********team*********** 
app.get('/getAllTeams', (req, res) => {
    console.log('Am here into get Teams');
    Team.find((err, docs) => {
        if (err) {
            console.log('error with DB');
        } else {
            res.status(200).json({
                allTeams: docs
            });
        }
    })

});
app.post('/addTeam', (req, res) => {
    console.log('Team Added', req.body);
    //insert ds DB
    const team = new Team({

        name: req.body.name,
        fondation: req.body.fondation,
        stadium: req.body.stadium,
        country: req.body.country
    })
    team.save().then(
        (data) => {
            if (data) {
                res.status(200).json({
                    message: 'Team Added with success'
                })
            }
        }
    )
});
//**********login-signup */
app.post('/login', (req, res) => {
    console.log("hello user", req.body);
  User.findOne({email:req.body.email}).then(
      (data)=>{
          if(!data){
              res.status(200).json({
                  message:'0'
              })
          }
          bcrypt.compare(req.body.pwd,data.pwd);
      }
  ).then(
      (findedUser)=> {
          if (!findedUser) {
              res.status(200).json({
                  message:'1'
              })
          }
          User.findOne({email:req.body.email}).then(
              (data)=>{
                  const user={
                      email:req.body.email,
                      firstName:data.firstName,
                      lastName:data.lastName
                  }
                  res.status(200).json({
                      message:'2',
                      user:user
                  })
              }
          )
      }
  )

})

app.post('/signup', (req, res) => {
    bcrypt.hash(req.body.pwd,10).then(
        (cryptedPwd)=>{
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                pwd:cryptedPwd 
                });
                user.save().then(
                    res.status(200).json({
                        message:'user addes successfully'
                    })
                )
        }
    )
    console.log("New user", req.body);
    
    })
    module.exports = app;