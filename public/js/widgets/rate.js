define([
 'backbone'
 ], function(Backbone) {
  var RateView = Backbone.View.extend({
    className: 'rate',
    initialize: function(attributes, options) {
      var title = $('<div></div>')
        .text(options.title)
        .addClass('title');
      var period = $('<div></div>')
        .text(options.period)
        .addClass('period');
      var rate = $('<div></div>')
        .text(this.model.get('rate'))
      this.$el.append(title);
      this.$el.append(rate);
      this.$el.append(period);
    },
    render: function() {
    }
  
  });
  return RateView;
});
