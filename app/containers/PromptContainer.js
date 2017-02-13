var React = require('react');
var Prompt = require('../components/Prompt');
/*Advantage of react: each component managing its own state*/
var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      username: ''
    }
  },
  handleSubmitUser: function (e) {
    // Prevent the default action of the event
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      // Context helps you pass item to your component without going through props
      // Usually only works for router, to avoid passing router to props
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        }
      })
    } else {
      // Now router can be get from this.context.router
      // router.push: Transitions to a new URL, adding a new entry in the browser history.
      // passed in either the url, or an object (with url as value of 'path')
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  handleUpdateUser: function (event) {
    // e.target.value is the value user typed in the input field
    this.setState({
      username: event.target.value
    });
  },
  render: function () {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
});

module.exports = PromptContainer;
