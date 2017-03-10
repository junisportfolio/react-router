import React from 'react';
import Header_content from '../../common';


class Chatting extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "채팅관리",
			pageTitleName: "채팅",
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
				<h2>Chatting</h2>
			</div>
		)
	}
}


export default Chatting;
