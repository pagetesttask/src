import {FETCH_USER_START, FETCH_USERS_START, 
		FETCH_USER_SUCCESS, FETCH_USER_ERROR,
		FETCH_USERS_SUCCESS, FETCH_NEXT_USERS,
		FETCH_LIST_POSITIONS, FETCH_USERS_RESET
			} from './actionTypes'


export function userLoad(){
	return async (dispatch, getState) => {
		dispatch(getUserStart())
		fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users/1')
		 .then((response)=> {
		   return response.json();
		 })
		 .then((data)=> {
		 	dispatch(getUserSuccess(data))
 })
	.catch(error => dispatch(getUserError(error)))	 
	}
}


export function usersLoad(){
	return async (dispatch, getState) => {
		dispatch(getUsersStart())
		let num = 6;
		if(window.screen.width < 400){
			num = 3;
		}
		fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${num}`)
		 .then((response)=> {
		   return response.json();
		 })
		 .then((data)=> {
		  dispatch(getUsersSuccess(data))
		 })
		 .catch(error => dispatch(getUserError(error)))
	}
}


export function showNextUsers() {
	return async (dispatch, getState) => { 
		const next = getState().users
		fetch(next.nextUrl)
		 .then(response => response.json())
			.then(data => {
				dispatch(getNextUsers(data))
			})
			.catch(error => dispatch(getUserError(error)))
	}
}

export function getPositions() {
	return async dispatch => {
		fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
		.then(function(response) {
		   return response.json();
		 })
		.then(function(data) {
		  dispatch(getListPositions(data))
		 })
	}
}

export const getListPositions = (data) => {
	return {
		type: FETCH_LIST_POSITIONS,
		payload: data
	}
}


export function postUser(formData) {
	return async (dispatch, getState) => {
		fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
			.then(res =>res.json())
	    .then(res =>{
			fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',{
				method: 'POST',
				headers: {'token': res.token},
				body: formData})
				.then(res =>{
					return res.json();
				}).then((data) => {
					dispatch(getUsersReset())
					dispatch(usersLoad())
				})
				.catch(error => dispatch(getUserError(error)))
			});
        
	}
}

export const getUsersReset = () => {
	return {
		type: FETCH_USERS_RESET

	}
}



export const getNextUsers = (data) => {
	return {
		type: FETCH_NEXT_USERS,
		payload: data
	}
}


export const getUserStart = () => {
	return {
		type: FETCH_USER_START
	}
}

export const getUsersStart = () => {
	return {
		type: FETCH_USERS_START
	}
}

export const getUserSuccess = (data) => {
	return {
		type: FETCH_USER_SUCCESS,
		data: data.user
	}
}

export  const getUsersSuccess = (data) => {
		return {
			type: FETCH_USERS_SUCCESS,
			data: data
	}
}

export const getUserError = (error) => {
	return {
		type: FETCH_USER_ERROR,
		error: error
	}
}