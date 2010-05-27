var sys = require('sys');

var home = function(){

    this.index = function(){
        this.response.writeHead(200, {'Content-Type': 'text/plain'});
        this.response.end('Hello World\n');
    }    
}

exports.controller_home =  home;