module.exports = function(app) {
  var model = require('./model/models.server');
  var db = require('./model/models.server');
  require('./test-mongodb/app')(app);
  require("./services/user.service.server.js")(app,model);
  require("./services/collectionpoint.service.server.js")(app,model);
  require("./services/catalog.service.server.js")(app,model);
};
