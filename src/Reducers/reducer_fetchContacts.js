import ATypes from '../Actions/action_types';

export default function(state = {
	loading: false
}, action) {
	switch (action.type) {
		case ATypes.FETCH_CONTACTS:
			return {
				loading: true
			};
		case ATypes.FETCH_CONTACTS_SUCCESS:
			return {
				loading: false,
				success: true,
				payload: action.data
			};
		case ATypes.FETCH_CONTACTS_FAILED: 
			return {
				loading: false,
				success: false,
			}
	}
	return state;
}