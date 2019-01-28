const React = require('react');
const ReactDOMServer = require('react-dom/server');
const HTML = require('../html.js').default;
const App = require('../app.js').default;
const Routes = require('../components/Routes/Routes').default;
const StaticRouter = require('react-router').StaticRouter;

export default () => (req, res) => {
	const html = ReactDOMServer.renderToString(
		<HTML>
			<StaticRouter location={req.url} context={{}}>
				<App>
					<Routes />
				</App>
			</StaticRouter>
		</HTML>
	);
	res.setHeader('content-type', 'text/html');
	res.status(200).send(html);
};
