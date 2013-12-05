(function(){

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 THE BRIDGE
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
var bridge = window.bridge = {};

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 Common Public Functions
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
var $ = bridge.$ = function(id) { return document.getElementById(id) };
bridge.now = function() { return +new Date };
bridge.addClass = function( elm, name ) { elm.className += ' ' + name }
bridge.remClass = function( elm, name ) {
    elm.className = elm.className.split(name).join('');
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 Bridge Metrics Collector???
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
bridge.metrics = {};

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 Bridge Namespace
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
bridge.namespace     = {};
bridge.namespace.get = function(){ return bridge.namespace.name };
bridge.namespace.set = function(name){ bridge.namespace.name  = name };

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 Meter
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
bridge.meter = {};
bridge.meter.remove = function( name, icon ) {
    // TODO - 
};
bridge.meter.add = function( name, icon ) {
    // TODO - 
};
bridge.meter.update = function( name, value ) {
    // TODO - 
};


/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 System State and Audio/Visual Announcements
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
bridge.status = {};
bridge.status.element = $('pubnub-status');
bridge.status.body    = document.getElementsByTagName('body')[0];
bridge.status.message = function(message) {
    bridge.addClass( bridge.status.element, 'statuschangea' );
    setTimeout( function(){
        bridge.status.element.innerHTML = message;
    }, 500 );
    setTimeout( function(){
        bridge.remClass( bridge.status.element, 'statuschangea' );
    }, 2000 );
};
bridge.status.alert = function() {
    bridge.addClass( bridge.status.body, 'system-alert' );
};
bridge.status.allclear = function() {
    bridge.remClass( bridge.status.body, 'system-alert' );
};

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 Settings
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
bridge.settings = {};
bridge.settings.load = function() {
    // TODO - 
};
bridge.settings.save = function(settings) {
    // TODO - 
};

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 Live Continuous Tests
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
bridge.tests = {};
bridge.tests.load = function() {
    // TODO - 
};
bridge.tests.add = function(test) {
    // TODO - 
};
bridge.tests.remove = function(test) {
    // TODO - 
};


})();
