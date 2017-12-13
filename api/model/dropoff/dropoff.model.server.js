/**
 * Created by hemanthshetty on 12/10/17.
 */
var mongoose = require('mongoose');
var DropOffSchema = require('./dropoff.schema.server');
var DropOffModel = mongoose.model('DropOffModel', DropOffSchema);


DropOffModel.createDropOff = createDropOff;
DropOffModel.getDropOffForCollectionPoint=getDropOffForCollectionPoint;
DropOffModel.findDropOffById=findDropOffById;
DropOffModel.updateDropOff=updateDropOff;
DropOffModel.findCustomerDropOff=findCustomerDropOff;



module.exports = DropOffModel;


function findCustomerDropOff(custId)
{
  return DropOffModel.find({customerId:custId});
}

function createDropOff(item) {
  return DropOffModel.create(item);
}

function getDropOffForCollectionPoint(collectionPointId)
{
  return DropOffModel.find({collectionPointId:collectionPointId});
}

function findDropOffById(dropId)
{
  return DropOffModel.findOne({_id: dropId});
}

function updateDropOff(dropOff)
{
  return DropOffModel.updateOne({_id:dropOff._id}, dropOff);
}
