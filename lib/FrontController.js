var sys = require('sys');

FrontController = function(){
    
    this.execute = function(request){
        
        var c = require('application/controllers/controller_'+request.controller);
        var controller =   c['controller_'+request.controller];
        controller.prototype = this.mainController;
        var cont = new controller();
        cont[request.action]();
        
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