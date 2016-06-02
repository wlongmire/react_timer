const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

const CountdownPage = React.createClass({
  getInitialState:function() {
      return {
        count: 0,
        countdownStatus: 'stopped'
      };
  },

  //added when props or state have been updated
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {

      switch( this.state.countdownStatus) {
        case("started"):
          this.startCountdown();
          break;
      }

    }
  },

  startCountdown:function() {
    this.timer = setInterval(() => {

      var newCount = this.state.count - 1;

      if (newCount <= 0) {
        clearInterval(this.timer);
      }

      this.setState({
        count: (newCount >= 0)?newCount:0,
        countdownStatus: (newCount <= 0)?"stopped": "started"
      });


    }, 1000);

  },

  handleSetCountdown:function(seconds) {
    this.setState({
      count:seconds,
      countdownStatus: 'started'
    });
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
