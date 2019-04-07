import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userLoad} from '../../../store/actions/user'
import Loading from '../../Loading/Loading'

class User extends Component  {

componentDidMount() {
	this.props.userLoad()
}

		render() {
			const {loading, user:{name, email, photo}} = this.props;
				if(loading){  return <Loading/>}
				return (
				  <div className="user">
						<div className="user-block">
								<span className="user__name">{name}</span>
								<span className="user__email">{email}</span>
						</div>
						<img src={photo} className="user__avatar" alt=""/>
						<a href='/' className="log-out">
								<span className="icon-sign-out"></span>
						</a>
							</div>	)
		}
		
}

function mapStateToProps(state) {
	return {
		user: state.user.user,
		loading: state.user.loading
	}
}

function mapDispatchToProps(dispatch){
	return {
		userLoad: () => dispatch(userLoad())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
