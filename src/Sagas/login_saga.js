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
import LoginAction from '../Actions/LoginAction';

const redirectHomeScreen = (navigator) => {
	navigator.resetTo({
		name: "Home"
	})
}
const setStorage = (key, value) => {
	try {
		return AsyncStorage.setItem(key, value);
	} catch (e) {
		console.log(e.message);
	}
}

export function* loginFlow(action) {
	try {
		console.log('logging in ...');
		const data = yield call(login, action.username, action.password);
		console.log(data);
		if (!data) {
			yield put(LoginAction.loginFailed('wrong password or username'));
		} else {
			yield call(setStorage, 'accesskey', data.accesskey);
			yield call(setStorage, 'username', data.username);
			yield put(LoginAction.loginSuccess(data.accesskey, data.username));
			yield call(redirectHomeScreen, action.navigator);
		}
	} catch (e) {
		yield put(LoginAction.loginFailed(e.message));
	} finally {
		if (yield cancelled()) {
			yield put(LoginAction.loginFailed('login request cancelled'));
		}
	}
}


// export default function* loginFlow(action) {
// 	yield call(authenticateOnLogin, action.username, action.password, action.navigator);
// }
