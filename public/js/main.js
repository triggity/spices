
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
  
  $(document).ready(function() {
    var b = new Backbone.Model({rate: 50});
    var a = new Rate({model: b}, {title: 'some metric', period: 'dwarfs/picometer'});
    console.log(a);
    $('#rates').append('<div></div>');
    $('#rates').click(function() {
      console.log('asdfsdf');
    });
    $('#rates').append(a.el);
    setInterval(function() { newRate = b.get('rate') + 50; b.set('rate', newRate)}, 3000);
  
  });

});
