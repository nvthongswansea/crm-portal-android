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
	console.log('cc1')
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


export function* logoutFlow(action) {
	try {
		console.log('logging out...')
		yield call(removeStorage, ['username', 'accesskey']);
		yield call(redirectLoginScreen, action.navigator);
	}
	catch (e) { }

}

