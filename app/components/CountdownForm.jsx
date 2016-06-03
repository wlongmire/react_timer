var React = require('react');

const CountdownForm = React.createClass({
  onSubmit:function(e){
    e.preventDefault();

    var strSeconds = this.refs.seconds.value;

    if (strSeconds !== "" && strSeconds.match(/^[0-9]*$/)) {
        this.refs.seconds.value = "";
        this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },

  render:function(){

    return(
      <div>
        <form onSubmit={this.onSubmit} ref="form" className="countdown-form">
          <input type="text" placeholder="Enter Time in Seconds" ref="seconds"></input>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
