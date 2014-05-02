/** @namespace Top level namespace **/
var App = App || {};

/**
 * Parse string namespace automatically generating nested
 * namespaces.
 * 
 * @param ns_string
 * @returns string
 */
App.namespace = function(ns_string) {
    var parts = ns_string.split('.'),
        parent = App,
        pl, i;
    
    if (parts[0] == "fdgApp") {
        parts = parts.slice(1);
    }
    
    pl = parts.length;
    
    for (i = 0; i < pl; i++) {
        if (typeof parent[parts[i]] == 'undefined') {
            parent[parts[i]] = {};
        }
        
        parent = parent[parts[i]];
    }
    
    return parent;
};

App.namespace('App.model');