/**
 * Created by hemanthshetty on 12/10/17.
 */

module.exports = function(app,model) {

  app.post('/api/user/:userId/dropoff', createDropOff);

  function createDropOff(req, res) {
    var dropOff = req.body;
    model.dropOffPointModel.createDropOff(dropOff).then(function(data)
    {
      res.json(data);
    },function(err){
      res.json(null);
    });
  }

}

