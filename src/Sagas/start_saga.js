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


const getStorage = (key) => {
	try {
		return AsyncStorage.getItem(key)
			.then((value) => value)
			.catch((e) => { console.log(e) });
	} catch (e) {
		console.log(e.message);
	}
}

const removeStorage = (array) => {
	try {
		AsyncStorage.multiRemove(array, (e) => {
			console.log(e)
		});
	} catch (e) {
		console.log(e.message);
	}
}

const redirectLoginScreen = (navigator) => {
	navigator.push({
		name: "Login"
	})
}

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

function* authenticate(username, password, navigator) {
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

function* loginFlow(navigator) {
	while (true) {
		const { username, password } = yield take(ATypes.LOGIN);
		const logintask = yield fork(authenticate, username, password, navigator);
		const action = yield take([ATypes.LOGOUT, ATypes.LOGIN_FAILED]);
		console.log(action.type)
		if (action.type == ATypes.LOGOUT)
			yield cancel(logintask);
		yield call(removeStorage, ['username', 'accesskey']);
	}
}

function* checkAccesskey() {
	const accesskey = yield call(getStorage, 'accesskey');
	if (accesskey)
		return true;
	return false;
}

export function* startFlow() {
	console.log('app is starting...')
	try {
		const { navigator } = yield take(ATypes.START);
		const checkKey = yield call(checkAccesskey);

		if (checkKey) {
			yield call(redirectHomeScreen, navigator);
			yield put(StartAction.finishedStart());
			const action = yield take([ATypes.LOGOUT, ATypes.LOGIN_FAILED]);
			console.log(action.type)
			yield call(removeStorage, ['username', 'accesskey']);
		} else {
			yield call(redirectLoginScreen, navigator);
			yield put(StartAction.finishedStart());
			yield fork(loginFlow, navigator);
		}
	} catch (e) {
		console.log(e);
	}
}
