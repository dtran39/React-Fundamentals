var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var Link =ReactRouter.Link;
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var MainContainer = require('../components/MainContainer');
var Loading = require('../components/Loading');
var styles = require('../styles');

function ConfirmBattle(props){
	return (
    props.isLoading === true ?
      <Loading speed={800} text="Waiting" /> :
			<MainContainer>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
						<UserDetailsWrapper header='Player One'>
							<UserDetails info={props.playersInfo[0]} />
						</UserDetailsWrapper>
						<UserDetailsWrapper header='Player Two'>
							<UserDetails info={props.playersInfo[1]} />
						</UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
						<button type='button' className='btn btn-lg btn-success' onClick={props.initiateBattle}>
								Initiate battle
							</button>
          </div>
          <div className='col-sm-12' style={styles.space}>
						<Link to='/playerOne'>
							<button type='button' className='btn btn-lg btn-primary'>
								Reselect player
							</button>
						</Link>
          </div>
        </div>
      </MainContainer>
	)
}
ConfirmBattle.PropTypes = {
	onInitiateBattle: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired
}
module.exports = ConfirmBattle;
