//configuration crap
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

//program kickoff
require([
  'backbone',
  'widgets/rate'
  ], function(Backbone, Rate) {
  var prepInputs = function() {
    return $('input').val();
  };
  var populate = function(data) {
    var b = new Backbone.Model({rate: 50});
    var b2 = new Backbone.Model({rate: 50});
    var a = new Rate({model: b}, {title: 'dwarf droplets', period: 'droplets/picometer'});
    var a2 = new Rate({model: b2}, {title: 'lion whisperers', period: 'deaths/inch'});
    $('#rates').append(a.el);
    $('#rates').append(a2.el);
    setInterval(function() {
      var req = $.ajax({
        url: 'http://localhost:5000/data',
        type: 'POST',
        data: data
      });
      req.done(function(resp) {
        b.set('rate', resp.foo)
        b2.set('rate', resp.bar)
      });
    },3000);
  };
  var start = function() {
    var data = prepInputs();
    populate(data);

  };
  //kicks everything off once dom is ready 
  $(document).ready(function() {
    $('#gobutton').click(start);
  });

});
