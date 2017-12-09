/**
 * Created by hemanthshetty on 11/11/17.
 */


var userModel = require('./user/user.model.server');
var collectionPointModel = require('./collectionpoint/collectionpoint.model.server');
var catalogModel = require('./catalog/catalog.model.server');


var model = {
  userModel: userModel,
  collectionPointModel: collectionPointModel,
  catalogModel: catalogModel
};


module.exports = model;
