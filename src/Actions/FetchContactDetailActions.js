import ATypes from './action_types';

const doFetchConDetail = (contactid) => ({
    type: ATypes.FETCH_CONTACT_DETAIL,
    contactid
})

const fetchConDetailSuccess = (data) => ({
    type: ATypes.FETCH_CONTACT_DETAIL_SUCCESS,
    data
})

const fetchConDetailFailed = (error) => ({
    type: ATypes.FETCH_CONTACT_DETAIL_FAILED,
    error
})

const doFetchOther = (contactid) => ({
    type: ATypes.FETCH_OTHER,
    contactid
})

const fetchOtherSuccess = (data) => ({
    type: ATypes.FETCH_OTHER_SUCCESS,
    data
})

const fetchOtherFailed = (error) => ({
    type: ATypes.FETCH_OTHER_FAILED,
    error
})

export default {
    doFetchConDetail,
    fetchConDetailSuccess,
    fetchConDetailFailed,
    doFetchOther,
    fetchOtherSuccess,
    fetchOtherFailed
}