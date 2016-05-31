const React = require('react');
const { Link, IndexLink } = require('react-router');

const Nav = () => {
      return(
        <nav className="top-bar">

          <div className="top-bar-left">
            <ul className="menu">
                <li className="menu-text">React Timer App</li>
                <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Timer</IndexLink></li>
                <li><Link to="/countdown" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Countdown</Link></li>
            </ul>
          </div>

          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">Built by <Link to="https://github.com/wlongmire/">Longmire</Link></li>
            </ul>
          </div>

        </nav>
      );
};

module.exports = Nav;
