/**
 * Created by hemanthshetty on 12/10/17.
 */

module.exports = function(app,model) {

  app.post('/api/user/:userId/dropoff', createDropOff);
  app.get('/api/user/:userId/dropoff', getCustomerDropOff);
  app.get('/api/collection/:cId/dropoff', getDropOffForCollectionPoint);
  app.get('/api/dropoff/:dropId',getDropOff);
  app.put('/api/collection/:collectionPointId/dropoff/:dropOffId', updateDropOff);


  function updateDropOff(req,res){
    var dropId=req.params['dropOffId'];
    var dropOff=req.body;
    dropOff._id=dropId;
    model.dropOffPointModel.updateDropOff(dropOff).then(function(data)
    {
      for(i=0;i<dropOff.inventory.length;i++)
      {
         if(dropOff.status=="Collected") {
           updateInventory(dropOff.inventory[i].itemId, dropOff.inventory[i].quantity);
         }
      }
      res.json({success:true});
    },function(err)
    {
      res.status(400);
      res.json(null);
    });
  }

  function updateInventory(itemId,quantity){
    model.catalogModel.findCatalogItemById(itemId).then(
    function(data){
      data.quantity=data.quantity+parseInt(quantity);
      model.catalogModel.updateCatalogItem(data).then(function(data)
      {
        return;
      },function(err)
      {

      });
    },function(err){

    }
  );
  }

  function getDropOff(req,res)
  {
    var dropId = req.params['dropId'];
    model.dropOffPointModel.findDropOffById(dropId)
      .then(function (data) {
        res.json(data);
      }, function (err) {
        res.json(null);
      });
  }

  function getCustomerDropOff(req,res)
  {
    var userId = req.params['userId'];
    model.dropOffPointModel.findCustomerDropOff(userId)
      .then(function (data) {
        res.json(data);
      }, function (err) {
        res.json(null);
      });
  }

  function createDropOff(req, res) {
    var dropOff = req.body;
    model.dropOffPointModel.createDropOff(dropOff).then(function(data)
    {
      res.json(data);
    },function(err){
      res.json(null);
    });
  }

  function getDropOffForCollectionPoint(req, res) {
    var cId=req.params['cId'];
    model.dropOffPointModel.getDropOffForCollectionPoint(cId).then(function(data)
    {
      if(data)
      {
        res.json(data);
      }
      else
      {
        res.json([{}]);
      }
    },function(err){
      res.json(err);
    });
  }

}

