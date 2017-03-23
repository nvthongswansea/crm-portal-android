import {
    call,
    put,
    fork,
    take,
    cancelled
} from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import ATypes from '../Actions/action_types';
import { fetchContacts, fetchContactDetail, fetchOtherDetail } from '../API/API_fetchContacts';
import FetchContactsActions from '../Actions/FetchContactsActions';
import FetchDetailActions from '../Actions/FetchContactDetailActions';

const getStorage = (key) => {
    try {
        return AsyncStorage.getItem(key)
            .then((value) => value)
            .catch((e) => { console.log(e) });
    } catch (e) {
        console.log(e.message);
    }
}

export function* fetchContactsFlow(action) {
    try {
        const data = yield call(fetchContacts, 10, 1, action.keyword);
        yield put(FetchContactsActions.fetchContactsSuccess(data));
    } catch (e) {
        console.log(e.message);
        yield put(FetchContactsActions.fetchContactsFailed(e));
    }

}

export function* fetchMoreContacts(action) {
    try {
        const data = yield call(fetchContacts, 10, action.page, action.keyword);
        yield put(FetchContactsActions.fetchMoreContactsSuccess(data));
    } catch (e) {
        console.log(e.message);
        yield put(FetchContactsActions.fetchMoreContactsFailed(e));
    }
}

export function* fetchContactDetailSaga(action) {
    try {
        const username = yield call(getStorage, 'username');
        const accesskey = yield call(getStorage, 'accesskey');
        const data = yield call(fetchContactDetail, username, accesskey, action.contactid);
        if (data.result == true) {
            yield put(FetchDetailActions.fetchConDetailSuccess(data));
        } else {
            yield put(FetchDetailActions.fetchConDetailFailed('No data'));
        }
    } catch (e) {
        yield put(FetchDetailActions.fetchConDetailFailed(e.message));
    }
}

export function* fetchOtherDetailSaga(action) {
    try {
        const username = yield call(getStorage, 'username');
        const accesskey = yield call(getStorage, 'accesskey');
        const data = yield call(fetchOtherDetail, username, accesskey, action.contactid);
        yield put(FetchDetailActions.fetchOtherSuccess(data));
    } catch (e) {
        yield put(FetchDetailActions.fetchOtherFailed(e.message));
    }
}