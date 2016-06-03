var React = require('react')
const Controls = require('Controls');

var Clock = React.createClass({
  getDefaultProps: function() {
    totalSeconds: 0
  },

  propTypes: {
      totalSeconds: React.PropTypes.number
  },

  formatSeconds: function(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);

    return(((minutes<10)?"0":"") + minutes + ":" + ((seconds<10)?"0":"") + seconds);
  },

  render: function() {
    var {totalSeconds} = this.props;

    return(
      <div className="clock">
        <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
      </div>
    );
  }
});

module.exports = Clock;
