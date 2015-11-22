// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var VpnSwitcher = require('./components/vpn-switcher/vpn-switcher');
var config = require('./config');

ReactDOM.render(
	<VpnSwitcher connectionsSource={config.server + "/connections"}/>,
	document.getElementById('app')
);
