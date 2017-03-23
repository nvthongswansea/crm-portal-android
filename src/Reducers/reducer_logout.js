import ATypes from '../Actions/action_types';

export default function(state = {
	loading: false
}, action) {
	switch (action.type) {
		case ATypes.LOGOUT:
			return {
				loading: true
			};
		case ATypes.LOGOUT_FINISHED:
			return {
				loading: false
			}
	}
	return state;
}