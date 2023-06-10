const mongoose = require('mongoose');
require('dotenv').config()


const url = process.env.DB_USERNAME
mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))