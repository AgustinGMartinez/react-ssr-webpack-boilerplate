import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Routes from './components/Routes/routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

function render(Component) {
	ReactDOM.hydrate(
		<Component>
			<App>
				<Routes />
			</App>
		</Component>,
		document.getElementById('react-root')
	);
}

render(Router);

// if (module.hot) {
// 	module.hot.accept('./App.js', () => {
// 		const NewApp = require('./App.js').default;
// 		render(NewApp);
// 	});
// }
