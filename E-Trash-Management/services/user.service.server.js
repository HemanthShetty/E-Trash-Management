

module.exports = function(app) {
  var userModel = require("../model/user/user.model.server");

  app.post('/api/user' , createUser);
  app.get('/api/user', findUser);
  app.get('/api/user/:userId',findUserById );
  app.put('/api/user/:userId', updateUser);
  app.delete('api/user/:userId', deleteUser);


  function findUserById(req, res) {
    var userId = req.params["userId"];
    userModel.findUserById(userId).then(function (user) {
      if (user) {
        res.json(user);

      }
      else {
        res.json({});
      }
    });
  }

  function findUser(req, res){
    var username = req.query['username'];
    var password = req.query['password'];
    if(username && password) {
      var promise = userModel.finduserByCredentails(username, password);
      promise.then(function(user){
        res.json(user);
        console.log(user);
      });
      return;
    } else if(username) {
      userModel
        .findUserByUsername(username)
        .then(function(user){
          res.json(user);
          console.log(user);
        });
      return;
    } else {
      res.status(404).send({error: "Not found"});
    }
  }


  function finduserByCredentails(username,password) {
    var promise = userModel.finduserByCredentails(username, password);
    promise.then(function(user){
      res.json(user);
      console.log(user);
    });
  }


  function findUserById(req,res){
    var userId = req.params["userId"];
    var promise = userModel.findUserById(userId);
    promise.then(function (result) {
      if(result){
        res.json(result);
      }
      else {
        res.status(404).send({ error: "User not Found" });
      }
    });
    return;
  }



  function createUser(req, res) {
    var newUser = req.body;
    userModel.createUser(user)
      .then(function (user) {
        res.json(user);
      });
  }



  function updateUser(req, res) {
    var uid = req.params["userId"];
    var newUser = req.body;
    userModel.updateUser(uid,newUser)
      .then(function (status) {
        console.log(status);
        res.send(status);
      }, function (err) {
        console.log(err);
      });
    return;
  }

  function deleteUser(req, res) {
    var uid = req.params["userId"];
    userModel
      .deleteUser(uid)
      .then(function (user) {
        res.json(user);
      });
  }

};
