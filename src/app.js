const express = require('express');
const Routes= require('./routes/index.js')

const app = express();

let users = [];

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Welcome to the Product');
})

app.use('/api', Routes);


module.exports = app;