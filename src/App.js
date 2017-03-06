import React, {Component, PropTypes} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Miss
} from 'react-router-dom';
import Home from './router/home';
import { About, About2 } from './router/about';
import Topics from './router/topic';
import { Header, Footer } from './layout';


const propTypes = {};
const defaultProps = {};

class MocobeeOffice extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<Router>
				<div>
					<Header/>

					<Route path="/" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/about" component={About2}/>
					<Route path="/topics" component={Topics}/>

					<Footer/>
				</div>
			</Router>
		);
	}

}

MocobeeOffice.propTypes = propTypes;
MocobeeOffice.defaultProps = defaultProps;

export default MocobeeOffice;

