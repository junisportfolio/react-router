import React from 'react';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


const Header = () => (
	<header id="header">
		<h1>Header</h1>
		<hr/>
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/about2">About2</Link></li>
			<li><Link to="/topics">Topics</Link></li>
		</ul>
		<hr/>

	</header>
)

export default Header;