import React from 'react';
import Header_content from '../../common';


class Board extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "게시판관리",
			pageTitleName: "게시판",
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
				<h2>Board</h2>
			</div>
		)
	}
}


export default Board;


