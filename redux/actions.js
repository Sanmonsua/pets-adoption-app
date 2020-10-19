export const SET_LOCATION = 'SET_LOCATION'
export const SET_TYPE = 'SET_TYPE'

export function setLocation(location) {
	return {
		type: SET_LOCATION,
		payload: location,
	}
}

export function setType(type) {
	return {
		type: SET_TYPE,
		payload: type,
	}
}
