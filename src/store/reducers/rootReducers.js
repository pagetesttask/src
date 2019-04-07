import {combineReducers} from 'redux'
import userReducer from './user'
import usersReducer from './users'
import singUpReducer from './signUpUser'

export default combineReducers({
	user: userReducer,
	users: usersReducer,
	signUpUser: singUpReducer
})