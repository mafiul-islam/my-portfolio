const express = require('express')
const router = express.Router();
const User = require('../models/userSchema')
require('../database/connection')
const app = express();

app.use(express.json());

// router.get('/', (req, resp) => {
//     resp.send("Hello world form server route js");
// })


router.post('/register', (req, resp) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {

        return resp.status(503).json("No Profile Found");
    }
    User.findOne({ email: email })
        .then((userExits) => {
            if (userExits) {
                return resp.status(503).json("Email already Exits");
            }
            const user = new User({ name, email, phone, work, password, cpassword });

            user.save().then(() => {
                resp.status(201).json("User succesfully addesd");
            }).catch((err)=> {
                resp.status(501).json("Databse error accurs");
            })
        }).catch((err)=> {
            resp.status(501).json("Databse error accurs");
        })


});

module.exports = router;