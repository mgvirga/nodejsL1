const fs = require('fs');

const express = require('express');

const app = express();

const port = 9600;

app.get('/',(req,res) =>
{
    res.send('<h1> Welcome to express server</h1>')
})

app.listen(port,(err) =>{
    console.log('server is running on port ' + port);
})
