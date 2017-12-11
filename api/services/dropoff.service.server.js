/**
 * Created by hemanthshetty on 12/10/17.
 */

module.exports = function(app,model) {

  app.post('/api/user/:userId/dropoff', createDropOff);

  app.get('/api/collection/:cId/dropoff', getDropOffForCollectionPoint);

  function createDropOff(req, res) {
    var dropOff = req.body;
    model.dropOffPointModel.createDropOff(dropOff).then(function(data)
    {
      console.log(JSON.stringify(data));
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

