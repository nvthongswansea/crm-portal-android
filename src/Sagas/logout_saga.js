import {
	call,
	put,
	fork,
	take,
	cancelled
} from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import ATypes from '../Actions/action_types';
import { login } from '../API/API_login';
import StartAction from '../Actions/StartAction';
import LoginAction from '../Actions/LoginAction';


const removeStorage = (array) => {
	try {
		AsyncStorage.multiRemove(array, (e) => {
			console.log(e)
		});
	} catch (e) {
		console.log(e.message);
	}
}


export default function* logoutFlow(logintask) {
		const action = yield take([ATypes.LOGOUT, ATypes.LOGIN_FAILED]);
		console.log(action.type)
		if (action.type == ATypes.LOGOUT)
			yield cancel(logintask);
		yield call(removeStorage, ['username', 'accesskey']);
}
