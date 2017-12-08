module.exports = function(app)
{


    app.get("/api/test", findAllMessages);
    app.post("/api/test", createMessage);
    app.delete("/api/test/:id", deleteMessage);


  var connectionString = 'mongodb://127.0.0.1:27017/test'; // for local

  if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
    var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += 'ds133816.mlab.com:33816/heroku_nqzdnx12'; // use yours
    console.log('connection string is'+connectionString);
  }

  var mongoose = require("mongoose");
    mongoose.connect(connectionString);

};
