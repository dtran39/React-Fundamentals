var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');
var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    console.log('getInitialState');
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentWillMount: function(){
    console.log('componentWillMount');
  },
  componentWillReceiveProps: function(){
    console.log('componentWillReceiveProps');
  },
  componentWillUnmount: function(){
    console.log('componentWillUnMount');
  },
  componentDidMount: function(){
    // console.log('componentDidMount');
    // This call back will run once the component finished rendering the view
    var query = this.props.location.query;
    // Fetch info from github, then update the state
    /* What really happened:
      1. call getPlayersInfo(passing in [player_1_username, player_2_username])
        the function return a promise
      2. when that promise resolved
        we have players
    */

    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players){
        console.log('PLayers', players);
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        });
      }.bind(this));
      /*
       .bind(arg)saying the this keyword inside the function, will now be arg
       */
  },
  handleInitiateBattle: function(){
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    });
  },
	render: function(){
		return (
      <ConfirmBattle
        initiateBattle={this.handleInitiateBattle}
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
      />
		)
	}
});
module.exports = ConfirmBattleContainer;
