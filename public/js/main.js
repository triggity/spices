
require.config({
  paths: {
    'react': 'vendor/react/react.min'
  }
});

require([
  'react',
  'rate'
    ], function(React, Rate) {
  var rates = React.renderComponent(Rate.Rate({}), document.getElementById('rates'));
  console.log('done');

});
