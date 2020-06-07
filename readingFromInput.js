// testing the strings for different values

// reading the input from the console. 
const readLine = require("readline");
const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout 
});

r1.question("Enter the string ",function(name){
    console.log(name);
    r1.close();
   });

r1.on("close", function(){
 console.log(" bye bye");
});   
