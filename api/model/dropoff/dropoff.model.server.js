/**
 * Created by hemanthshetty on 12/10/17.
 */
var mongoose = require('mongoose');
var DropOffSchema = require('./dropoff.schema.server');
var DropOffModel = mongoose.model('DropOffModel', DropOffSchema);


DropOffModel.createDropOff = createDropOff;



module.exports = DropOffModel;


function createDropOff(item) {
  return DropOffModel.create(item);
}
