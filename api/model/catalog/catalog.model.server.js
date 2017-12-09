/**
 * Created by hemanthshetty on 11/11/17.
 */

var mongoose = require('mongoose');
var CatalogSchema = require('./catalog.schema.server');
var CatalogModel = mongoose.model('CatalogModel', CatalogSchema);


CatalogModel.findAllItems = findAllItems;
/*
PageModel.createPage = createPage;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;
*/

module.exports = CatalogModel;


function findAllItems() {
  return CatalogModel.find();
}


/*
function createPage(page) {
  return PageModel.create(page);
}

function findPageById(pageId) {
  return PageModel.findOne({_id:pageId});
}

function updatePage(page) {
  return PageModel.updateOne({_id:page._id}, page);
}

function deletePage(pageId) {
  return PageModel.deleteOne({_id:pageId});
}

*/
