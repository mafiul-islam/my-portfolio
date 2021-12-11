const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();

dotenv.config({ path: './confiq.env' });

const PORT = process.env.PORT;
require('./database/connection');
app.use(express.json());
//we link the router files to make our routes easy
app.use(require('./router/auth'));

app.get('/', (req, resp) => {
    resp.send("application is running added to git...")
});



app.listen(PORT, () => {
    console.log(`server started at  ${PORT}`)
})