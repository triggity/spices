 /** @jsx React.DOM */
define(['react'], function(React) {

  console.log(React);
  var Rate = React.createClass({
    getDefaultProps: function() {
      return {
        className: 'rater',
        name: 'rate',
        rate: 0
      };                 
    },
    render: function() {
      var styles = {
        float: 'left',
        margin: '0 10px'
      };
      return (
        <div style={styles}>
          <div> {this.props.name} </div>
          <div> {this.props.rate} </div>
        </div>
      );
    }
  });
  
  var Rates = React.createClass({
    reset: function() {
      this.setState({rates: {}});
    },
    getInitialState: function() {
      return {rates: {}}
    },
    render: function() {
      var rates = this.state.rates;
      var output = [];
      for (var i in rates) {
        output.push({name: i, rate: rates[i]});;
      }
      var styles = {
        height: '40px'
      };
  
      return (
        <div style={styles}>
          {output.map(function(result) {
            return <Rate name={result.name} rate={result.rate} />
          })}
        </div>
      );        
    },
  });
  var output = {};
  output.Rate = Rate;
  output.Rates = Rates;
  return output;




});
