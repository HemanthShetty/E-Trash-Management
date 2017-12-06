var mongoose = require('mongoose');
var UserSchema = require("./user.schema.server");
var UserModel = mongoose.model("UserModel", UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findAllUser= findAllUser;
UserModel.finduserByCredentails= finduserByCredentails;
UserModel.findUserByUsername = findUserByUsername;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;

module.exports = UserModel;

function finduserByCredentails(username, password) {
  return UserModel.findOne({username: username, password: password});
}

function createUser(user) {
  return UserModel.create(user);
}
function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function findAllUser() {
  return UserModel.find();
}

function updateUser(userId, user) {
  return UserModel.update({_id: userId}, user);
}
function findUserById(userId) {
  return UserModel.findById(userId);
}

function updateUser(userId, user) {
  return UserModel.update({_id: userId}, user);
}

function deleteUser(userId) {
  return UserModel.deleteOne({_id: userId});
}
