var connect = require('connect');
var http = require('http');

var app = connect();
  app.use(connect.static('app'));
  app.use('/js/lib/', connect.static('node_modules/requirejs/'));
  app.use('/node_modules', connect.static('node_modules'));
  app.use('/test', connect.static('test/'));
  app.use('/test', connect.static('app'));

http.createServer(app).listen(8080, function () {
  console.log('Running on http://localhost:8080');
});