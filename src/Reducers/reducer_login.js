import ATypes from '../Actions/action_types';

export default function(state = {
	loading: false
}, action) {
	switch (action.type) {
		case ATypes.LOGIN:
			return {
				loading: true
			};
		case ATypes.LOGIN_SUCCESS:
			return {
				loading: false,
				success: true,
				uInfo: {
					accesskey: action.accesskey,
					username: action.username
				}
			};
		case ATypes.LOGIN_FAILED: 
			return {
				loading: false,
				success: false
			}
	}
	return state;
}