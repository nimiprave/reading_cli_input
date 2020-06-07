// designing calculator using the async function.

// declaration
const color = require('colors');
const prompt = require('prompt');

// at initialization
prompt.start();

// start-of-selection
console.log(color.underline.bold.magenta('Text Calculator'));

var schema = {
    properties: {
        Operator: {
            description : color.yellow('Please enter your operator ( -,*,/,+ )'),
            message: color.red('In correct operator: Choose from the following ( -,*,/,+ )'),
            pattern :/[/*-+]/,
            maxLength : 1,
            required: true
        },
        Operand_1: {
            description: color.yellow('Please enter the first Operand'),
            type : 'number',
         //   pattern : /^[0-9]+$/,
            maxLength : 4,
            message : 'Only numbers are allowed',
            required: true,
            conform : function(v){
                 if(Number.isInteger(v)){
                     return true;
                    }else{
                     return false;
                    }  
            }
        },
        Operand_2: {
            description: color.yellow('Please enter the Second Operand'),
            type : 'number',
         //   pattern : /^[0-9]+$/,
            message : 'Only numbers are allowed',
            required: true,
            conform : function(v){
                if(Number.isInteger(v)){
                    return true;
                   }else{
                    return false;
                   }  
           }
        },
    }
};

prompt.get(schema, function (err, result) {
    var finalValue;
    switch(result.Operator){
      case '+':
          finalValue = result.Operand_1 + result.Operand_2;
          break;
          case '-':
            finalValue = result.Operand_1 - result.Operand_2;
            break;

            case '*':
                finalValue = result.Operand_1 * result.Operand_2;
                break;

                case '/':
                    finalValue = result.Operand_1 / result.Operand_2;
                    break;
        }
    
    console.log( color.green("The Results are:  ") +finalValue );
    prompt.get(['Continue'],function(err,result){
        console.log(color.rainbow('Do you wish to Continue'));
        console.log(result.Continue);
   });
});


//console.log(oPerator);