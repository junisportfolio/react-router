import React from 'react';
import Header_content from '../../common';


class Mypage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "마이페이지",
			pageTitleName: "마이페이지",
			pageTitleNameSmall: ""
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
				<h2>Mypage</h2>
			</div>
		)
	}
}


export default Mypage;