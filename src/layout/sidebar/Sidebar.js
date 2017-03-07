import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


const Sidebar = () => (
	<aside className="main-sidebar">
		<section className="sidebar">
			<ul className="sidebar-menu">
				<li className="treeview">
					<Link to="#">
						<i className="fa fa-th"></i> <span>커뮤니티 관리</span>
						<span className="pull-right-container">
              <i className="fa fa-angle-down pull-right"></i>
            </span>
					</Link>
					<ul className="treeview-menu">




						<li><Link to="/member"><i className="fa fa-circle-o"></i>회원 관리</Link></li>
						<li><Link to="/channel"><i className="fa fa-circle-o"></i>채널 관리</Link></li>
						<li><Link to="/board"><i className="fa fa-circle-o"></i>게시판 관리</Link></li>
						<li><Link to="/chatting"><i className="fa fa-circle-o"></i>채팅방 관리</Link></li>
						<li><Link to="/filter"><i className="fa fa-circle-o"></i>필터링 관리</Link></li>
					</ul>
				</li>

				<li className="treeview">
					<Link to="#">
						<i className="fa fa-laptop"></i> <span>방송국 관리</span>
						<span className="pull-right-container">
							<i className="fa fa-angle-down pull-right"></i>
						</span>
					</Link>
					<ul className="treeview-menu">
						<li><Link to="broadcast"><i className="fa fa-circle-o"></i>방송 관리</Link></li>
						<li><Link to="broadcast_code"><i className="fa fa-circle-o"></i>방송 코드 관리</Link></li>
					</ul>
				</li>

				<li className="treeview">
					<Link to="#">
						<i className="fa fa-edit"></i> <span>비즈니스 관리</span>
						<span className="pull-right-container">
                          <i className="fa fa-angle-down pull-right"></i>
                        </span>
					</Link>
					<ul className="treeview-menu">
						<li><Link to="promotion"><i className="fa fa-circle-o"></i>프로모션 관리</Link></li>
						<li><Link to="coin"><i className="fa fa-circle-o"></i>꿀 이력 관리</Link></li>
						<li><Link to="exchange"><i className="fa fa-circle-o"></i>환전 관리</Link></li>
						<li><Link to="product"><i className="fa fa-circle-o"></i>상품 관리</Link></li>
						<li><Link to="cash"><i className="fa fa-circle-o"></i>결제 관리</Link></li>
					</ul>
				</li>

				<li><Link to="customer"><i className="fa fa-envelope"></i> <span>고객지원</span></Link></li>
				<li><Link to="mypage"><i className="fa fa-book"></i> <span>마이페이지</span></Link></li>

			</ul>
		</section>
	</aside>

)

export default Sidebar;












