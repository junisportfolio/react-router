import React from 'react';
import Header_content from '../../common';


class Member extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "회원관리",
			pageTitleName: "회원",
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



			</div>
		)
	}
}


export default Member;



