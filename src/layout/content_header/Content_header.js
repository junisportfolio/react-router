import React from 'react';


const Content_header = () => (
	<section className="content-header">
		<h1>
			{this.props.page_title}
			<small>Control panel</small>
		</h1>
		<ol className="breadcrumb">
			<li><a href="#"> Home</a></li>
			<li className="active">Dashboard</li>
		</ol>
	</section>
)

export default Content_header;