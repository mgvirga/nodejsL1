const fs = require("fs");

const argv = require('yargs').argv;

const filemes = "You are awesome!";

var newFileName = argv.filename;

const readline = require('readline-sync');

//opens the file arr.txt
fs.open("arr.txt", "r+", (err, response)=>{
    if(err)
    {
        
    }
    console.log("File opened successfully!!!");
})

//creates an array that hold arr.txt
var fileList = fs.readFileSync('arr.txt').toString().split("\n");

//checks if file exists
while(fileList.indexOf(newFileName) > -1)
{
    console.log(newFileName + " File exists");
    var newFileName = readline.question("Please enter a new file name? ");

    if(fileList.indexOf(newFileName) <= 0)
    {
        break;
    }
}

//add to each value of arr the values in the array
fs.appendFileSync("arr.txt", newFileName + ".txt\n");
    
//create a new file using input from a paramter as a text file and posting a message in said file
//the message reades filemes value
fs.writeFileSync(newFileName + ".txt", filemes);
console.log(newFileName + ".txt was created with mes: " + filemes)



