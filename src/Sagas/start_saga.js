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
import loginFlow from './login_saga';

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

function* logoutOnAutheticatedFlow() {
	const action = yield take(ATypes.LOGOUT);
	console.log(action.type)
	yield call(removeStorage, ['username', 'accesskey']);
}

function* checkAccesskey() {
	const accesskey = yield call(getStorage, 'accesskey');
	if (accesskey)
		return true;
	return false;
}

export function* startFlow() {
	while (true) {
		console.log('app is starting...')
		try {
			const { navigator } = yield take(ATypes.START);
			const checkKey = yield call(checkAccesskey);

			if (checkKey) {
				yield call(redirectHomeScreen, navigator);
				yield put(StartAction.finishedStart());
				yield fork(logoutOnAutheticatedFlow)
			} else {
				yield call(redirectLoginScreen, navigator);
				yield put(StartAction.finishedStart());
				yield fork(loginFlow, navigator);
			}
		} catch (e) {
			console.log(e);
		}
	}
}
