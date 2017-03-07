import React from 'react';
import Header_content from '../../common';


class Filter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "필터링관리",
			pageTitleName: "필터링",
			pageTitleNameSmall: "관리"
		}
	}

	render(){

		return(
			<div>
				<Header_content
					pageTitle={this.state.pageTitle}
					pageTitleName={this.state.pageTitleName}
					pageTitleNameSmall={this.state.pageTitleNameSmall}
				/>
				<h2>Filter</h2>
			</div>
		)
	}
}


export default Filter;