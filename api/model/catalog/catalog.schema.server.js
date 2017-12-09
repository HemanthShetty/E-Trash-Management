/**
 * Created by hemanthshetty on 11/11/17.
 */


var mongoose = require('mongoose');

var CatalogSchema = mongoose.Schema({
  name: String,
  description: String,
  price: String,
  quantity: String,
  imageUrl: String,
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'catalog'});

module.exports = CatalogSchema;



