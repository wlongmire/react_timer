const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

//components
const Main = require('Main');
const PageTemplate = require('PageTemplate');
const TimerPage = require('TimerPage');
const CountdownPage = require('CountdownPage')

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//load custom css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ Main }>

      <Route path="/countdown" component={CountdownPage} />
      <IndexRoute component={TimerPage} />

    </Route>
  </Router>,
  document.getElementById('app')
);
