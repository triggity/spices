define([
 'backbone'
 ], function(Backbone) {
  var RateView = Backbone.View.extend({
    className: 'widget-number',
    initialize: function(attributes, options) {
      var title = $('<h1></h1>')
        .text(options.title)
        .addClass('title');
      var rate = $('<h2></h2>')
        .text(this.model.get('rate'))
        .addClass('value');
      var period = $('<p></p>')
        .text(options.period)
        .addClass('period');
      this.$el.append(title);
      this.$el.append(rate);
      this.$el.append(period);
      var self = this;
      this.model.on('change:rate', function() {
        console.log('yo');
        rate.text(self.model.get('rate'));
      });
    },
    render: function() {
    }
  
  });
  return RateView;
});
