const fs = require("fs");

const argv = require('yargs').argv

const filemes = "You are awesome!";
// const myarr = [];
//creates file
// if(myarr.length > 0)
// {
    
// }
//opens the file arr.txt
fs.open("arr.txt", "r+", (err, response)=>{
    if(err)
    {
        console.error(err, "Error Occured");
        return false;
    }
    console.log("File opened successfully!!!");
})

//creates an array and reads line by line what the contents of the file are
var array = fs.readFileSync('arr.txt').toString().split("\n");
console.log(argv.filename);
var checkFileName = false;

//check if file name exists and if it does dont do anything
for(i in array) 
{
    if(array[i].filename = argv.filename)
    {
        checkFileName = true;
        console.log("The file exists please give a new filename");
    }
}
if(!checkFileName)
{
    console.log(array[i]);
    console.log("The count of the array is " + array.length)
    //the space counts as a new line. adds a new string to line as file name
    fs.appendFileSync("arr.txt", argv.filename + "\r\n");

    //create a new file using input from a paramter as a text file and posting a message in said file
    //the message reades filemes value
    fs.writeFileSync(argv.filename + ".txt", filemes);
    console.log("File write completed.")
}
