import React from 'react';
import Header_content from '../../common';


class Promotion extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "프로모션관리",
			pageTitleName: "프로모션",
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
				<h2>Promotion</h2>
			</div>
		)
	}
}


export default Promotion;