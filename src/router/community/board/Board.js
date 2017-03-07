import React, {Component} from 'react';
import { Content_header } from '../../../layout';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (
			<div>
				<Content_header/>
				<h2>Board</h2>
			</div>
		);
	}

}


export default Board;