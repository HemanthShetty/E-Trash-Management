/**
 * Created by hemanthshetty on 11/11/17.
 */

  var mongoose = require("mongoose");
  var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    buyerAddress : String,
    buyerName : String,
    employeeId : String,
    organizationName: String,
    dateCreated: {
      type: Date,
      default: Date.now()
    }
  }, {collection: "user"});

module.exports=userSchema;
