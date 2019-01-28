import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

class Layout extends React.Component {
	// DO LOGGIN CHECK HERE

	render() {
		return (
			<React.Fragment>
				<Navbar />
				{this.props.children}
				<Footer />
			</React.Fragment>
		);
	}
}

export default Layout;
