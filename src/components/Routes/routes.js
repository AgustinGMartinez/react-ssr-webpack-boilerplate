import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/home';

const routes = () => {
	return (
		<Switch>
			<Route path="/acerca" component={() => <h1>Acerca</h1>} />
			<Route path="/checkout" component={() => <h1>Checkout</h1>} />
			<Route path="/" exact component={Home} />
			<Route render={() => <h1>404 not found</h1>} />
		</Switch>
	);
};

export default routes;
