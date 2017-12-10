module.exports = function(app,model) {

  app.get('/api/catalog', findAllItems);
  app.post('/api/catalog', createCatalogItem);
  app.get('/api/catalog/:itemId', findCatalogItemById);
  app.put('/api/catalog/:itemId', updateCatalogItem);
  app.delete('/api/catalog/:itemId', deleteCatalogItem);

  function updateCatalogItem(req,res){
    var itemId=req.params['itemId'];
    var details=req.body;
    details._id=itemId;
    model.catalogModel.updateCatalogItem(details).then(function(data)
    {
      res.json({success:true});
    },function(err)
    {
      res.status(400);
      res.json(null);
    });
  }

  function deleteCatalogItem(req,res){
    var itemId=req.params['itemId'];
    model.catalogModel.deleteCatalogItem(itemId).then(function(data){
      res.json({success:true});
    });
  }

  function findCatalogItemById(req,res)
  {
    var itemId=req.params['itemId'];
    model.catalogModel.findCatalogItemById(itemId).then(
      function(data){
        if(data==null)
        {
          res.status(404);
          res.json({});
        }
        else
        {
          res.json(data);
        }
      },function(err){
        res.status(500);
        res.json({});
      }
    );
  }

  function findAllItems(req, res) {
    model.catalogModel.findAllItems().then(function(data)
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


  function createCatalogItem(req, res) {
    var item = req.body;
    model.catalogModel.createCatalogItem(item).then(function(data)
    {
      res.json(data);
    },function(err){
      res.json(null);
    });
  }
}
