const fs = require('fs');

const express = require('express');

const app = express();

const port = 6500;

app.get('/',(req,res) =>
{
    res.send('<h1> Welcome to express server</h1>')
})

app.listen(port,(err) =>{
    console.log('server is running on port ' + port);
})

fs.readFile('./data/db.json', (err, result) => {
    if(err)
    {
        throw err;
    }
    else{
        console.log(JSON.parse(result))
    }
})

fs.appendFile('./data/mytext.txt', 'My text read file\n', (err) =>{
    if(err) throw err;
    else
    {
        console.log('Data written successfully')
    }
})

app.get('/getMovies', (req, res) =>{
    fs.readFile('./data/db.json',(err,result) => {
        if(err){
            throw err;
        }
        else {
            res.send(JSON.parse(result))
        }
    })
})