var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
// It's a good practice to separate UI rendering to another component

/* If your component only render (a representational component),
  instead of using React.createClass, you can create a stateless function
    that takes props as an argument */
function Prompt (props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
          {/*onchange event is triggered
            after you have typed something into a field
            and then "exited out of it",
              e.g. click outside the field
                so the cursor isn't blinking in it any more*/}
            <input
              className="form-control"
              onChange={props.onUpdateUser}
              placeholder="Github Username"
              type="text"
              value={props.username} />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
                Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Prompt;
