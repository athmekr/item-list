const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.SERVER_PORT || 8000;
const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://thanos:PaxwuRF3kyMrV9qs@cluster0.lhfudmt.mongodb.net/?retryWrites=true&w=majority';
// const mongoURL = process.env.MONGO_URL;

//Due to deprecation warning
mongoose.set('strictQuery', false);

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("DB connection successful!");
}).catch((err) => {
    console.log("DB connection error: ", err);
});
// Load in the mongoose models
// const UserLogin = require('./models/login');
const Item = require('./models/item');

// Use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use cors
app.use(cors());

app.listen(port, () => {
    console.log(`Items list app listening on port ${port}`)
})

app.get('/items', (req, res) => {
    Item.find({})
    .then((items) => {
        res.send(items);
    })
    .catch((e) => {
        res.send(e);
    });
});

app.post('/item', (req, res) => {
    const description = req.body.description;
    const newItem = new Item ({
        description
    })
    newItem.save().then((items) => {
        res.send(items);
    })
});

// app.post('/login', (req, res) => {
//     const user = req.body.username;
//     const pass = req.body.password;
//     const responseObj = {};
//
//     function findUser() {
//         return new Promise((resolve, reject) => {
//             Login.findOne({
//                 username: user,
//             }).then (res => {
//                 const passFromDB = res.password;
//                 if(passFromDB === pass){
//                     resolve();
//                 } else {
//                     reject('Invalid password!')
//                 }
//             }).catch( err => {
//                 console.log("Error in finding user: ", err);
//                 reject('Authentication error!');
//             })
//         })
//     }
//
//     function sendResponse(){
//         return new Promise((resolve, reject) =>{
//             responseObj.status = "success";
//             responseObj.message = "User found!";
//             res.json(responseObj);
//         })
//     }
//
//     findUser()
//         .then(sendResponse)
//         .catch(err => {
//             responseObj.status = "error";
//             responseObj.message = "Error:" + err;
//             res.json(responseObj);
//         })
// })