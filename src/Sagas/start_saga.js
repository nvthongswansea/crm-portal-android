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
		AsyncStorage.multiRemove(array);
	} catch (e) {
		console.log(e.message);
	}
}

const redirectLoginScreen = (navigator) => {
	navigator.resetTo({
		name: "Login"
	})
}

const redirectHomeScreen = (navigator) => {
	navigator.resetTo({
		name: "Home"
	})
}

function* checkAccesskey() {
	const accesskey = yield call(getStorage, 'accesskey');
	if (accesskey)
		return true;
	return false;
}

export function* startFlow(action) {
	console.log('app is starting...')
	try {
		const checkKey = yield call(checkAccesskey);

		if (checkKey) {
			yield call(redirectHomeScreen, action.navigator);
			yield put(StartAction.finishedStart());
		} else {
			yield call(redirectLoginScreen, action.navigator);
			yield put(StartAction.finishedStart());
		}
	} catch (e) {
		console.log(e);
	}
}
