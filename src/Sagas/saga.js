import {
	fork,
	takeLatest
} from 'redux-saga/effects';
import {startFlow} from './start_saga';
import {fetchContactsFlow} from './fetchContact_saga';
import ATypes from '../Actions/action_types';

export default function* () {
	yield [
		fork(startFlow),
		takeLatest(ATypes.FETCH_CONTACTS,fetchContactsFlow)
	]
}
