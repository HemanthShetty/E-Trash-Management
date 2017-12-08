var connectionString = 'mongodb://127.0.0.1:27017/test'; // for local
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += 'ds133816.mlab.com:33816/heroku_nqzdnx12';
  console.log('connection string is inside my connection'+connectionString);
}

var mongoose = require("mongoose");
var db = mongoose.connect(connectionString,{
  useMongoClient: true
});
console.log('here');
module.exports=db;
