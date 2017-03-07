import React, {Component} from 'react';
import { Content_header } from '../../../layout';


class Member extends Component {

	constructor(props) {
		super(props);
		this.state = {
			page_title: '게시판 관리'
		}
	}

	render() {
		return (
			<div>
				<h2>Member</h2>
			</div>
		);
	}

}


export default Member;