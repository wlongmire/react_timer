const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

//components
const Main = require('Main');
const PageTemplate = require('PageTemplate');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//load custom css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ Main }>

      <Route path="/page" component={PageTemplate} />
      <IndexRoute component={PageTemplate} />

    </Route>
  </Router>,
  document.getElementById('app')
);
