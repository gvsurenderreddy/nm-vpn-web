// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var VpnSwitcher = require('./components/vpn-switcher/vpn-switcher');

ReactDOM.render(
	<VpnSwitcher connectionsSource="http://localhost:3000/connections"/>,
	document.getElementById('app')
);
