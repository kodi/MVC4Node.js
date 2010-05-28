var sys = require('sys');

var home = function() {

    this.index = function() {
        this.template.assign('firstName', 'Kodi');
        this.template.show('index.html');
    }
}

exports.controller_home = home;