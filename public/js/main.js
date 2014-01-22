
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
    }
  }
});

require([
  'backbone',
  'widgets/rate'
  ], function(Backbone, Rate) {

  var start = function() {
    var b = new Backbone.Model({rate: 50});
    var b2 = new Backbone.Model({rate: 50});
    var a = new Rate({model: b}, {title: 'dwarf droplets', period: 'droplets/picometer'});
    var a2 = new Rate({model: b2}, {title: 'lion whisperers', period: 'deaths/inch'});
    $('#rates').append(a.el);
    $('#rates').append(a2.el);
    setInterval(function() {
      function randomNum() {
        return Math.round(Math.random() * 100)
      }
      b.set('rate', randomNum)
      b2.set('rate', randomNum)
    },3000);
  
  };
  
  $(document).ready(function() {

    $('#gobutton').click(function() {
      start()
    
    });  
  
  });

});
