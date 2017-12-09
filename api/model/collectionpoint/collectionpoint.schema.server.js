/**
 * Created by hemanthshetty on 11/11/17.
 */


var mongoose = require('mongoose');

var CollectionPointSchema = mongoose.Schema({
  name: String,
  description: String,
  street: String,
  city: String,
  state: String,
  postCode: String,
  country: String,
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'collectionpoint'});

module.exports = CollectionPointSchema;
