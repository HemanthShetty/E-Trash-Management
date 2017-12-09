/**
 * Created by hemanthshetty on 11/11/17.
 */


var mongoose = require('mongoose');

var CollectionPointSchema = mongoose.Schema({
  name: String,
  description: String,
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'website'});

module.exports = CollectionPointSchema;
