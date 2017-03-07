import React, { Component } from 'react';

class Content_header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="content-header">
				<h1>
					타이틀
					<small>Control panel</small>
				</h1>
				<ol className="breadcrumb">
					<li><a href="#"> Home</a></li>
					<li className="active">Dashboard</li>
				</ol>
			</section>
		);
	}
}

export default Content_header;