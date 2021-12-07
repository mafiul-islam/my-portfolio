const express = require('express')
const mongoose = require('mongoose')

const app = express();
const DB = 'mongodb+srv://mafiul:mafiul123@cluster0.xxcey.mongodb.net/myprofile?retryWrites=true&w=majority'

mongoose.connect(DB).then(() => {
    console.log(`connection successful`);
}).catch((error) => console.log(`Error connection`));

app.get('/', (req, resp) => {
    resp.send("application is running added to git...")
});

app.listen(5000, () => {
    console.log("server started at port 5000")
})