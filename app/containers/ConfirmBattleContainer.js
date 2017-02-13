var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    console.log('getInitialState');
    return {
      isLoading: true,
      playerInfo: []
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
    console.log('componentDidMount');
    // This call back will run once the component finished rendering the view
    var query = this.props.location.query;
    // Fetch info from github, then update the state
  },
	render: function(){
		return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo}
      />
		)
	}
});
module.exports = ConfirmBattleContainer;
