const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: './confiq.env' });

const app = express();
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    //useCreateIndex : true,
    useUnifiedTopology: true,
    //useFindAndModify : false
}).then(() => {
    console.log(`connection successful`);
}).catch((error) => console.log(`Error connection ${error}`));

app.get('/', (req, resp) => {
    resp.send("application is running added to git...")
});

app.listen(5000, () => {
    console.log("server started at port 5000")
})