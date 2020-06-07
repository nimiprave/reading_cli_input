// reading using the promp module. 
const prompt = require("prompt");

// start the prompt
prompt.start();

// get two properties from the User: Username and Email

prompt.get(['username','email'],function(err,result){
 console.log(result);
 console.log(result.username);
 console.log(result.email);
});