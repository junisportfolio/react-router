import React from 'react';
import Header_content from '../../common';


class Channel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "채널관리",
			pageTitleName: "채널",
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
				<h2>Channel</h2>
			</div>
		)
	}
}


export default Channel;