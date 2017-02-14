var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
var ResultsContainer = require('../containers/ResultsContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      {/*Route will embed routing information inside the component through this.props.route*/}
      {/*Active whenever we are on playerOne Route*/}
      <Route path='playerOne' header='Player One' component={PromptContainer} />
      {/*Active whenever we are on playerTwo Route*/}
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
      <Route path='battle' component={ConfirmBattleContainer}/>
      <Route path='results' component={ResultsContainer} />
    </Route>
  </Router>
);

module.exports = routes;
