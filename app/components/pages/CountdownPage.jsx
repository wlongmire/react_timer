const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

const CountdownPage = React.createClass({
  getInitialState:function() {
      return {count: 0};
  },

  handleSetCountdown:function(seconds) {
    this.setState({
      count:seconds
    })
  },

  render:function() {
    var { count } = this.state;
    return(
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )
  }
});

module.exports = CountdownPage;
