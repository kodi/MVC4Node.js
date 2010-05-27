require.paths.unshift(__dirname);

var sys = require('sys'),
  http = require('http'),
  engine = require('engine'),
  requestModule = require('lib/request'),
  frontController = require('lib/FrontController');
  

http.createServer(function (request, response) {
  var r = new requestModule.Request();
  var requestObject = r.parseRequest(request);


  frontController.FrontController.setResponse(response);
  frontController.FrontController.execute(requestObject);
  
  
  
}).listen(8000);

sys.puts('require paths: '+require.paths);
sys.puts('Server running at http://127.0.0.1:8000/');