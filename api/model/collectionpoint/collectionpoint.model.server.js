/**
 * Created by hemanthshetty on 11/11/17.
 */

var mongoose = require('mongoose');
var CollectionPointSchema = require('./collectionpoint.schema.server');
var CollectionPointModel = mongoose.model('CollectionPointModel', CollectionPointSchema);

CollectionPointModel.findAllCollectionPoints = findAllCollectionPoints;


module.exports = CollectionPointModel;


function findAllCollectionPoints() {
  return CollectionPointModel.find();
}

