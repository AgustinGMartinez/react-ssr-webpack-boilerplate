import React from 'react';
import LinkImagePath from './images/link.jpg';
import App from './app';

class HTML extends React.Component {
	render() {
		return (
			<html>
				<head>
					<link rel="stylesheet" href="main.css" />
				</head>
				<body>
					<div className="profile">
						<img src={LinkImagePath} alt="" />
						<h1>Link's Agus</h1>
						<div id="react-root">{this.props.children}</div>
					</div>
					<script src="vendor-bundle.js" />
					<script src="main-bundle.js" />
				</body>
			</html>
		);
	}
}

export default HTML;
