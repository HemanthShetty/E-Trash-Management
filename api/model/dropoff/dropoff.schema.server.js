/**
 * Created by hemanthshetty on 12/10/17.
 */

var mongoose = require('mongoose');

var DropOffSchema = mongoose.Schema({
  customerId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  collectionPointId: {type: mongoose.Schema.Types.ObjectId, ref: 'CollectionPointModel'},
  inventory: [{}],
  status: String,
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'DropOff'});

module.exports = DropOffSchema;



