const React = require('react');
const { Link, IndexLink } = require('react-router');

const Nav = React.createClass({
    render:function() {
      return(
        <nav className="top-bar">

          <div className="top-bar-left">
            <ul className="menu">
                <li className="menu-text">Example App</li>
                <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Home</IndexLink></li>
                <li><Link to="/page" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Page</Link></li>
            </ul>
          </div>

        </nav>
      );
    }
});

module.exports = Nav;
