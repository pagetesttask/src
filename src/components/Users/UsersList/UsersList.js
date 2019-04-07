import React, {Component} from 'react'
import HeadlineH2 from '../../UI/Headlines/HeadlineH2'
import Description from '../../UI/Description/Description'
import ListItem from '../ListItem/ListItem'
import {connect} from 'react-redux'
import {usersLoad, showNextUsers} from '../../../store/actions/user'


class UsersList extends Component {

componentDidMount() {
		this.props.usersLoad()
}


render() {
		return (
			<section id="users" className="users">
			<div className="container">
				<div className="row justify-content-center">
				
				<div className="col-10">
					<HeadlineH2 title="Our cheerful users"/>
					<Description>Attention! Sorting users by registration date</Description>
				</div>
					
				</div>
				</div>
						<section className="users-list">
						<div className="container">
	
<div className="row justify-content-lg-beetwen ">
						{
						 	this.props.users.map((u, index) => {
									return ( 
										< ListItem
											key={index}
											photo={u.photo}
											position={u.position}
											name={u.name}
											email={u.email}
											phone={u.phone}
										/>
									)
								})
						}
						</div>
						</div>

						<div className="container">
		 					<div className="row justify-content-center">
			 					{this.props.page <= (this.props.total_pages -1)
			 					 ? <button onClick={()=>this.props.showNextUsers()} className="btn btn-primary">Show more</button>
			 						: null}	
	 					</div>
						</div>

						</section>
					</section>
		);
}
		
};

function mapStateToProps(state) {
	return {
		users: state.users.users,
		nextUrl: state.users.nextUrl,
		page: state.users.page,
		total_pages: state.users.total_pages,
		total_users: state.users.total_users
	}
}

function mapDispatchToProps(dispatch) {
	return {
		usersLoad: () => dispatch(usersLoad()),
		showNextUsers: () => dispatch(showNextUsers())
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersList)