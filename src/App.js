import React, {Component, PropTypes} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Miss
} from 'react-router-dom';
import {
	Home,
	Member, Channel, Board, Chatting, Filter,
	Broadcast, Broadcast_code,
	Cash, Coin, Exchange, Product, Promotion,
	Customer,
	Mypage
} from './router';
import { Header, Sidebar, Content_header } from './layout';


const propTypes = {};
const defaultProps = {};

class MocobeeOffice extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<Router>
				<div className="wrapper">
					<Header/>
					<Sidebar/>
					<div className="content-wrapper">
						<section className="content">
							{/* 커뮤니티 */}
							<Route exact path="/" component={Home}/>
							<Route path="/member" component={Member}/>
							<Route path="/channel" component={Channel}/>
							<Route path="/board" component={Board}/>
							<Route path="/chatting" component={Chatting}/>
							<Route path="/filter" component={Filter}/>

							{/* 방송국 */}
							<Route path="/broadcast" component={Broadcast}/>
							<Route path="/broadcast_code" component={Broadcast_code}/>

							{/* 비즈니스 */}
							<Route path="/promotion" component={Promotion}/>
							<Route path="/coin" component={Coin}/>
							<Route path="/exchange" component={Exchange}/>
							<Route path="/product" component={Product}/>
							<Route path="/cash" component={Cash}/>

							{/* 고객지원 */}
							<Route path="/customer" component={Customer}/>

							{/* 마이페이지 */}
							<Route path="/mypage" component={Mypage}/>



						</section>
					</div>


				</div>
			</Router>
		);
	}

}

MocobeeOffice.propTypes = propTypes;
MocobeeOffice.defaultProps = defaultProps;

export default MocobeeOffice;

