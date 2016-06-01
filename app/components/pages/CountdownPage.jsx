const React = require('react');
const Clock = require('Clock');

const CountdownPage = React.createClass({
  render:function() {
    return(
      <div>
        <Clock totalSeconds={129} />
      </div>
    )
  }
});

module.exports = CountdownPage;
