const React = require('react');
const Controls = require('Controls');
const Clock = require('Clock');

const TimerPage = React.createClass({
  getInitialState:function(){
    return({
      count: 0,
      countdownStatus:"stopped"
    });
  },

  startTimer:function() {
    this.timer = setInterval(() => {
      const newCount = this.state.count + 1;

      this.setState({
        count:  newCount
      });

    }, 1000);
  },

  componentDidUpdate:function(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case("started"):
          this.startTimer();
          break;

        case("stopped"):
          this.setState({
            count:0
          });

        case("paused"):
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },

  componentWillUnmount:function(){
    clearInterval(this.timer);
    this.timer = undefined;
  },

  handleStatusChange:function(newStatus){
    this.setState({
      countdownStatus:newStatus
    });
  },

  render:function() {
    var { count, countdownStatus } = this.state;

    return(
      <div className="timer">
        <Clock totalSeconds={ count }/>
        <Controls onStatusChange={this.handleStatusChange} countdownStatus= { this.state.countdownStatus }/>
      </div>
    )
  }
});

module.exports = TimerPage;
