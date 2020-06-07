const prompt = require('prompt');
prompt.start();
//validation scheme
var scheme = {
  properties: {
    Username: {

      pattern: /^[a-zA-Z\s\-]+$/,
      message: 'Name must be only letters, spaces or dashes',
      required: true
    },
    Password: {
      required: true,
      hidden : true,
      replace: '*'
    }
  }

};

prompt.get(scheme, function (err, result) {

  console.log('Input validations done');
  console.log('Username: ' + result.Username);
  console.log('Password: ' + result.Password);
});