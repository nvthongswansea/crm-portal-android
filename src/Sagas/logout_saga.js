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
import LogoutAction from '../Actions/LogoutAction';


const removeStorage = (array) => {
	try {
		AsyncStorage.multiRemove(array);
	} catch (e) {
		console.log(e.message);
	}
}

export function* redirectLoginScreen(action) {
	action.navigator.resetTo({
		name: "Login"
	})
}

export function* logoutFlow(action) {
	try {
		console.log('logging out...')
		yield call(removeStorage, ['username', 'accesskey']);
		yield put(LogoutAction.finishLogout(action.navigator));
	}
	catch (e) { 
		yield put(LogoutAction.finishLogout(action.navigator));
	}

}

