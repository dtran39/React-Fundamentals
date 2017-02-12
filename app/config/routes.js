var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var routes = (
  // No matter what routes we go to, Main will always be displayed
  <Router history={hashHistory}>
    <Route path='/' components={Main}>
      <IndexRoute components={Home} />
    </Route>
  </Router>
);
module.exports = routes;
