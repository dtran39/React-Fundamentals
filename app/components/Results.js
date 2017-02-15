var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var MainContainer = require('../components/MainContainer');
var Loading = require('../components/Loading');
var Link = ReactRouter.Link;

// Private stateless functional components StartOver
// Reusable just inside results components
// Private because it is not exported
function StartOver() {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to="/playerOne">
        <button type='button' className='btn btn-lg btn-danger'> Start Over </button>
      </Link>
    </div>
  )
}

function puke(obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')} </pre>
}
function Results(props){
  if (props.isLoading === true) {
    return (
      <Loading speed={200} text="Waiting for results" />
    )
  }
  // console.log(puke(props));
  if (props.scores[0] === props.scores[1]) {
    // console.log(props.scores);
    return (
    <MainContainer>
      <h1>It&lsquo;s a tie</h1>
      <StartOver />
    </MainContainer>
    )
  }
  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = props.scores[0] > props.scores[1] ? 1 : 0;
	return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}>
          </UserDetails>
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}>
          </UserDetails>
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
	)
}
Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}
module.exports = Results;
