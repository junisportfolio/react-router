import React from 'react';
import Header_content from '../../common';


class Broadcast extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "방송관리",
			pageTitleName: "방송",
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
				<h2>Broadcast</h2>
			</div>
		)
	}
}


export default Broadcast;