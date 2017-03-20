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
import logoutFlow from './logout_saga';

const redirectHomeScreen = (navigator) => {
	navigator.push({
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

function* authenticateOnLogin(username, password, navigator) {
	console.log('logging in ...');
	try {
		const data = yield call(login, username, password);
		console.log(data);
		if (!data) {
			yield put(LoginAction.loginFailed('wrong password or username'));
		} else {
			yield call(setStorage, 'accesskey', data.accesskey);
			yield call(setStorage, 'username', data.username);
			yield put(LoginAction.loginSuccess(data.accesskey, data.username));
			yield call(redirectHomeScreen, navigator);
		}
	} catch (e) {
		yield put(LoginAction.loginFailed(e.message));
	} finally {
		if (yield cancelled()) {
			yield put(LoginAction.loginFailed('login request cancelled'));
		}
	}
}


export default function* loginFlow(navigator) {
	while (true) {
		const { username, password } = yield take(ATypes.LOGIN);
		const logintask = yield fork(authenticateOnLogin, username, password, navigator);
		yield call(logoutFlow, logintask);
	}
}
