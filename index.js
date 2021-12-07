const express = require('express')
const mongoose = require('mongoose')

const app = express();
const DB = ''

mongoose.connect(DB, {
    useNewUrlParser : true,
     //useCreateIndex : true,
    useUnifiedTopology : true,
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