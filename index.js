const express = require('express')

const app = express();

app.get('/', (req, resp)=> {
resp.send("application is running...")
});

app.listen(5000, ()=> {
    console.log("server started at port 5000")
})