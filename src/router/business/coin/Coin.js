import React from 'react';
import Header_content from '../../common';


class Coin extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "꿀관리",
			pageTitleName: "꿀",
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
				<h2>Coin</h2>
			</div>
		)
	}
}


export default Coin;