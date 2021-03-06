/**
 * Created by hemanthshetty on 11/11/17.
 */


var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server');
var UserModel = mongoose.model('UserModel', UserSchema);
UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.findUserByCredentails=findUserByCredentails;
UserModel.findUserByFacebookId = findUserByFacebookId;
UserModel.getAllUsers=getAllUsers;

module.exports = UserModel;


function getAllUsers()
{
  return UserModel.find();
}

function createUser(user) {
  return UserModel.create(user);
}

function findUserByFacebookId(facebookId) {
  return userModel.findOne({'facebook.id': facebookId});
}


function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function findUserByCredentails(credentials) {
  return UserModel.findOne(credentials);
}

function findUserById(userId) {
  return UserModel.findOne({_id: userId});
}

function deleteUser(userId) {
  return UserModel.deleteOne({_id:userId});
}

function updateUser(user) {
  return UserModel.updateOne({_id:user._id}, user);
}
