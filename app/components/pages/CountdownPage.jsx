const React = require('react');
const Clock = require('Clock');

const CountdownForm = require('CountdownForm');
const Controls = require('Controls');

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
        case("stopped"):
          this.setState({count: 0});
        case("paused"):
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }

    }
  },

  componentWillUnmount:function() {
      //stop and reset when changing pages
      clearInterval(this.timer);
      this.timer = undefined;
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

  handleStatusChange:function(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },

  render:function() {
    var { count, countdownStatus } = this.state;

    const renderControls = (status) => {
        if (status === "stopped") {
          return (<CountdownForm onSetCountdown={ this.handleSetCountdown }/>);
        } else {
          return (<Controls onStatusChange={ this.handleStatusChange } countdownStatus= { status }/>);
        }
    };


    return(
      <div>
      <Clock totalSeconds={count} />
        { renderControls( this.state.countdownStatus ) }
      </div>
    )
  }
});

module.exports = CountdownPage;
