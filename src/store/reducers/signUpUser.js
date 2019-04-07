import {FETCH_LIST_POSITIONS } from '../actions/actionTypes'

const initialState = {
    positions: []
}

export default function singUpReducer(state = initialState, action) {
	switch(action.type){
		case FETCH_LIST_POSITIONS :
			return {
				...state,
				positions: action.payload.positions
			}
		default:
			return state
	}
}