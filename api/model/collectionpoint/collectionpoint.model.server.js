/**
 * Created by hemanthshetty on 11/11/17.
 */

var mongoose = require('mongoose');
var CollectionPointSchema = require('./collectionpoint.schema.server');
var CollectionPointModel = mongoose.model('CollectionPointModel', CollectionPointSchema);

CollectionPointModel.findAllCollectionPoints = findAllCollectionPoints;
CollectionPointModel.createCollectionPoint=createCollectionPoint;
CollectionPointModel.deleteCollectionPoint=deleteCollectionPoint;

module.exports = CollectionPointModel;


function findAllCollectionPoints() {
  return CollectionPointModel.find();
}

function createCollectionPoint(cpoint) {
  return CollectionPointModel.create(cpoint);
}

function deleteCollectionPoint(collectionPointId) {
  return CollectionPointModel.deleteOne({_id:collectionPointId});
}
