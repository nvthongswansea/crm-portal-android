import ATypes from '../Actions/action_types';

export default function(state = {
	loading: false
}, action) {
	switch (action.type) {
		case ATypes.FETCH_CONTACT_DETAIL:
			return {
				loading: true
			};
		case ATypes.FETCH_CONTACT_DETAIL_SUCCESS:
			return {
				loading: false,
				success: true,
                payload: action.data
			};
		case ATypes.FETCH_CONTACT_DETAIL_FAILED: 
			return {
				loading: false,
				success: false,
                error: action.error
			}
	}
	return state;
}