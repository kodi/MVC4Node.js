require.paths.unshift(__dirname);

var sys = require('sys'),
  http = require('http'),
  requestModule = require('lib/Request'),
  frontController = require('lib/FrontController');
  

http.createServer(function (request, response) {
  
  // parse request
  var requestObject = requestModule.Request.parseRequest(request);
  // pass the response
  frontController.FrontController.setResponse(response);
  // execute
  frontController.FrontController.execute(requestObject);
  

}).listen(8000);

sys.puts('Server running at http://127.0.0.1:8000/');