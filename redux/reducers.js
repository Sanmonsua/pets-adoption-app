import { combineReducers } from 'redux'
import * as actions from './actions'

function location(
	state = {
		city: 'New York',
		country: 'US',
		latitude: '40.730610',
		longitude: '-73.935242',
	},
	action
) {
	if (action.type == actions.SET_LOCATION) {
		return action.payload
	}
	return state
}

export default combineReducers({ location })
