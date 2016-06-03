var React = require('react');

const Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func
  },

  componentWillReceiveProps:function(newProps) {
  },

  onStatusChange:function(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },

  render:function() {
    var { countdownStatus } = this.props;

    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary expanded" onClick={ this.onStatusChange("paused") }>Pause</button>
      } else {
        return <button className="button primary expanded" onClick={ this.onStatusChange("started") }>Start</button>
      }
    }

    return(
      <div className="controls">
        { renderStartStopButton() }
        <button className="button alert hollow expanded" onClick= { this.onStatusChange("stopped")}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
