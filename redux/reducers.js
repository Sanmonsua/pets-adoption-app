import { combineReducers } from 'redux'
import * as actions from './actions'

const LOCATION_INITIAL_STATE = {
	city: 'New York',
	country: 'US',
	latitude: '40.730610',
	longitude: '-73.935242',
}

function location(state = LOCATION_INITIAL_STATE, action) {
	if (action.type == actions.SET_LOCATION) {
		return action.payload
	}
	return state
}

function type(state = '', action) {
	if (action.type == actions.SET_TYPE) {
		return action.payload.value
	}
	return state
}

export default combineReducers({ location, type })
