const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: './confiq.env' });
const DB = process.env.DATABASE;
mongoose.connect(DB, {
    useNewUrlParser: true,
    //useCreateIndex : true,
    useUnifiedTopology: true,
    //useFindAndModify : false
}).then(() => {
    console.log(`connection successful`);
}).catch((error) => console.log(`Error connection ${error}`));