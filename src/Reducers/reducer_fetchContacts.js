import ATypes from '../Actions/action_types';

export default function(state = {
	loading: false,
	loadingMore: false
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
		case ATypes.LOAD_MORE_CONTACTS: 
			return {
				...state,
				loadingMore: true,
			}
		case ATypes.LOAD_MORE_CONTACTS_SUCCESS:
			return {
				...state,
				loadingMore: false,
				payload: {
					...state.payload,
					records:
					[
						...state.payload.records.slice(0, state.payload.records.length),
						...action.data.records.slice(0, action.data.records.length)
					] 
					
				}
			}
		case ATypes.LOAD_MORE_CONTACTS_FAILED:
			return {
				...state,
				loadingMore: false,
			}

	}
	return state;
}