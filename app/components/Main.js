var React = require('react');
// Use webpack config to load css
require('../main.css');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Main = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <ReactCSSTransitionGroup
          transitionName='appear'
          transitionEnterTimeout={10000}
          transitionLeaveTimeout={10000}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});
module.exports = Main;
