import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	render() {
		return (
			<nav>
				<Link exact="true" to="/">
					Home
				</Link>
				<Link to="/acerca">Acerca</Link>
				<Link to="/checkout">Checkout</Link>
			</nav>
		);
	}
}

export default Navbar;
