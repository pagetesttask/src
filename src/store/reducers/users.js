import {FETCH_USERS_START,FETCH_USERS_SUCCESS, 
	FETCH_USER_ERROR, FETCH_NEXT_USERS, FETCH_USERS_RESET} from '../actions/actionTypes'

const initialState = {
	users: [],
	nextUrl: '',
	page: 1,
	total_pages: 0,
	total_users: null,
	links: false,
	error: '',
	reset: false
}

export default function usersReducer(state = initialState, action) {
	switch(action.type){
		case FETCH_USERS_START:
			return {...state, loading: true}
		case FETCH_USERS_SUCCESS:
				
				if(state.reset === true){
					return{...state, users: action.data.users };	
				}
				if(state.reset === false){
					return {
						...state,
				loading: false,
				nextUrl: action.data.links.next_url,
				page: action.data.page,
				total_pages: action.data.total_pages,
				total_users: action.data.total_users,
				users: [
				 	...state.users,
                    ...action.data.users
				],
					}
					
				}
				break;
		case FETCH_USERS_RESET :
			return {
				...state,
				reset: true
				// users: [...action.payload.users]
			
			}
		case FETCH_NEXT_USERS:
			return {
				...state,
				users: [
				 	...state.users,
                    ...action.payload.users
				],
				nextUrl: action.payload.links.next_url,
				page: action.payload.page,
			}
		case FETCH_USER_ERROR:
			return {...state, error: action.error.error}
		default:
			return state
	}
}