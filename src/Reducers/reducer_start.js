import ATypes from '../Actions/action_types';

export default function(state = {
	loading: false
}, action) {
	switch (action.type) {
		case ATypes.START:
			return {
				loading: true
			};
		case ATypes.START_FINISHED:
			return {
				loading: false
			};
	}
	return state;
}