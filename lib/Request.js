var sys = require('sys');

var Request = function() {
    this.defaultAction = 'index';
    this.defaultController = 'home';

    this.parseRequest = function(request) {
        var parts = request.url.split("/");
        this.controller = parts[1] || this.defaultController;
        this.action = parts [2] || this.defaultAction;
        return this;
    }
}

exports.Request = new Request();