import {
	fork,
	takeLatest
} from 'redux-saga/effects';
import {startFlow} from './start_saga';
import {loginFlow} from './login_saga';
import {logoutFlow, redirectLoginScreen} from './logout_saga';
import {fetchContactsFlow, fetchMoreContacts, fetchContactDetailSaga, fetchOtherDetailSaga} from './fetchContact_saga';
import ATypes from '../Actions/action_types';

export default function* () {
	yield [
		takeLatest(ATypes.START, startFlow),
		takeLatest(ATypes.LOGIN, loginFlow),
		takeLatest(ATypes.LOGOUT, logoutFlow),
		takeLatest(ATypes.LOGOUT_FINISHED, redirectLoginScreen),
		takeLatest(ATypes.FETCH_CONTACTS,fetchContactsFlow),
		takeLatest(ATypes.LOAD_MORE_CONTACTS, fetchMoreContacts),
		takeLatest(ATypes.FETCH_CONTACT_DETAIL, fetchContactDetailSaga),
		takeLatest(ATypes.FETCH_OTHER, fetchOtherDetailSaga)
	]
}
