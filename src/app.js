import React from 'react';
import { hot } from 'react-hot-loader/root';
import s from './app.scss';
import Layout from './components/Layout/Layout';

class App extends React.Component {
	state = {
		counter: 0
	};

	componentDidMount() {
		this.interval = window.setInterval(() => {
			this.setState(prevState => ({
				counter: prevState.counter + 1
			}));
		}, 2500);
		console.log(process.env.NODE_ENV);
	}

	componentWillUnmount() {
		window.clearInterval(this.interval);
	}

	render() {
		return (
			<Layout>
				<h1 className={s.title}>Lento: {this.state.counter}</h1>
				{/* ROUTES, DONT TOUCH */}
				{this.props.children}
			</Layout>
		);
	}
}

export default hot(App);
