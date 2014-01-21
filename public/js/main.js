
require.config({
  paths: {
    'underscore': 'vendor/underscore/underscore',
    'backbone': 'vendor/backbone/backbone',
    'jquery': 'vendor/jquery/jquery-2.0.3.min',
  
  },
  shim: {
    "underscore": {
      "exports": "_"
    },
    "backbone": {
      "deps": ["underscore", "jquery"],
      "exports": "Backbone"
    },
    "oauth": {
      "exports": "oauth"
    },
    "tweenlite": {
      "deps": ["cssplugin"],
      "exports": "tweenlite"
    },
    "socketio": {
      "exports": "io"
    }
  }
});

require([
    ], function() {
  console.log('done');

});
