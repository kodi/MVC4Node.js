var sys = require('sys');
var error = require('lib/ErrorHandler');
var template = require('lib/Template');

var FrontController = function() {

    this.execute = function(requestObject) {

        // pass the request object to the main controller
        // so all other controllers can have access to it
        this.mainController.request = requestObject;

        // initialize controller
        var cont = this.initializeController(requestObject);

        //execute action
        this.executeAction(cont, requestObject.action);


    };

    this.setResponse = function(response) {
        this.mainController = new Controller(response);
    };

    this.executeAction = function(controller, action) {
        try {
            controller[action]();
        } catch(e) {
            error.ErrorHandler.displayError('Invalid Action: ' + action, this.mainController.response);
        }
    };

    this.initializeController = function(requestObject) {
        try {
            var c = require('application/controllers/controller_' + requestObject.controller);
            var controller = c['controller_' + requestObject.controller];
            controller.prototype = this.mainController;
            var cont = new controller();
            return cont;
        } catch(e) {
            error.ErrorHandler.displayError('Invalid Controller: ' + requestObject.controller, this.mainController.response);

        }
    }
};


var Controller = function(response) {
    this.response = response;
    this.template = template.Template;
    this.template.response = response;
};

Controller.prototype.getResponse = function() {
    return this.response;
};

exports.FrontController = new FrontController(); 