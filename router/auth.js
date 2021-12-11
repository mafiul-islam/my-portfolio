const express = require('express')
const router = express.Router();
const User = require('../models/userSchema')
require('../database/connection')

router.get('/', (req, resp) => {
    resp.send("Hello world form server route js");
})


router.post('/register', (req, resp) => {
    console.log(req.body);
    resp.json({ message: req.body });

    const { name } = req.body;
    if (!name) {
        return resp.status(404).json({ error: "No Profile Found" });
    }

});

module.exports = router;