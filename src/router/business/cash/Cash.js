import React from 'react';
import Header_content from '../../common';


class Cash extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "결제관리",
			pageTitleName: "결제",
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
				<h2>Cash</h2>
			</div>
		)
	}
}


export default Cash;