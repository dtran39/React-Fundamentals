var USER_DATA = {
  name: 'Duc Tran',
  username: 'dtran39',
  image: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/11667298_967621593259350_9088687871227869340_n.jpg?oh=981474ab6f67f27b1b8b0cb0f5c76a2a&oe=59412BDE'
}

var React = require('react')
var ReactDOM = require('react-dom')
var ProfilePic = React.createClass({
	render: function(){
		return (
			<img src={this.props.imageUrl} style={{height: 100, width: 100}}/>
		)
	}
});
var ProfileLink = React.createClass({
	render: function(){
		return (
			<div>
				<a href={"https://github.com/"  + this.props.username}>
					{this.props.username}
				</a>
			</div>
		)
	}
});
var ProfileName = React.createClass({
	render: function(){
		return (
			<div>{this.props.name}</div>
		)
	}
});
var Avatar = React.createClass({
	render: function(){
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image} />
				<ProfileName name={this.props.user.name}/>
				<ProfileLink username={this.props.user.username}/>
			</div>
		)
	}
});

ReactDOM.render(<Avatar user={USER_DATA}/>, document.getElementById('app'));