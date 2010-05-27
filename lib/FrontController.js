var sys = require('sys');
var error = require('lib/ErrorHandler');

FrontController = function(){
    
    this.execute = function(request){
       try{
        var c = require('application/controllers/controller_'+request.controller);
        var controller =   c['controller_'+request.controller];
        controller.prototype = this.mainController;
        var cont = new controller();
        cont[request.action]();
        }catch(e){
           sys.log(e);
           error.ErrorHandler.displayError(e,this.mainController.response);
       }
        
    }
    
    this.setResponse = function(response){
        this.mainController  = new Controller(response);

    }
    
}


var Controller = function(response){
    this.response = response;
    
}

Controller.prototype.getResponse = function(){
    return this.response;
}

exports.FrontController = new FrontController(); 