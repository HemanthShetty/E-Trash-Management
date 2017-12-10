/**
 * Created by hemanthshetty on 11/11/17.
 */

var mongoose = require('mongoose');
var CatalogSchema = require('./catalog.schema.server');
var CatalogModel = mongoose.model('CatalogModel', CatalogSchema);


CatalogModel.findAllItems = findAllItems;
CatalogModel.createCatalogItem = createCatalogItem;
CatalogModel.findCatalogItemById = findCatalogItemById;
CatalogModel.updateCatalogItem = updateCatalogItem;
CatalogModel.deleteCatalogItem=deleteCatalogItem;



module.exports = CatalogModel;


function findAllItems() {
  return CatalogModel.find();
}

function createCatalogItem(item) {
  return CatalogModel.create(item);
}

function findCatalogItemById(itemId) {
  return CatalogModel.findOne({_id:itemId});
}

function updateCatalogItem(item) {
  return CatalogModel.updateOne({_id:item._id}, item);
}

function deleteCatalogItem(itemId) {
  return CatalogModel.deleteOne({_id:itemId});
}



