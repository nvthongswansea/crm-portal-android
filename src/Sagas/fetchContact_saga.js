import {
    call,
    put,
    fork,
    take,
    cancelled
} from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import ATypes from '../Actions/action_types';
import { fetchContacts } from '../API/API_fetchContacts';
import FetchContactsActions from '../Actions/FetchContactsActions';

export function* fetchContactsFlow(action) {
    try {
        const data = yield call(fetchContacts, 1, action.keyword);
        yield put(FetchContactsActions.fetchContactsSuccess(data));
    } catch (e) {
        console.log(e.message);
        yield put(FetchContactsActions.fetchContactsFailed(e));
    }

}