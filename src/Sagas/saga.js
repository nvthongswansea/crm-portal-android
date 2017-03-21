import {
	fork,
	takeLatest
} from 'redux-saga/effects';
import {startFlow} from './start_saga';
import {loginFlow} from './login_saga';
import {logoutFlow} from './logout_saga';
import {fetchContactsFlow, fetchMoreContacts} from './fetchContact_saga';
import ATypes from '../Actions/action_types';

export default function* () {
	yield [
		takeLatest(ATypes.START, startFlow),
		takeLatest(ATypes.LOGIN, loginFlow),
		takeLatest(ATypes.LOGOUT, logoutFlow),
		takeLatest(ATypes.FETCH_CONTACTS,fetchContactsFlow),
		takeLatest(ATypes.LOAD_MORE_CONTACTS, fetchMoreContacts)
	]
}
