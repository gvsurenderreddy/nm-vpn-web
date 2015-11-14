var React = require('react');
var rp = require('request-promise');
var Toggle = require('../toggle/toggle');

var VpnSwitcher = React.createClass({
	getInitialState: function () {
		return {
			switching: false
		};
	},
	componentDidMount: function() {
		rp.get({
			url: this.props.connectionsSource,
			json: true
		})
			.then(function(result) {
				this.setState({
					connections: result
				});
			}.bind(this));
	},
	setActiveConnection: function (connection) {
		this.setState({
			switching: true
		});
		rp.put({
			uri: connection._links[0].href,
			body: {
				up: true
			},
			json: true
		}).then(function(result) {
			this.setState({
				switching: false
			});
			console.log(result);
		}.bind(this));
	},
	handleChange: function (e) {
		console.log(e);
	},
	render: function () {
		var toggles;
		if (this.state && this.state.connections) {
			toggles = this.state.connections.map(function (connection, i) {
				return <div key={connection.id} onClick={this.setActiveConnection.bind(this, connection)}>
					<Toggle name="vpn" id={connection.id} label={connection.name} disabled={this.state.switching} />
				</div>;
			}.bind(this));
		}
		return (
			<div className="vpn-switcher">
				{toggles ? toggles : 'Loading connections...'}
			</div>
		);
	}
});

module.exports = VpnSwitcher;
