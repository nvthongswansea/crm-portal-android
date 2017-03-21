import ATypes from './action_types';

const fetchContacts = (keyword) => ({
    type: ATypes.FETCH_CONTACTS,
    keyword
})

const fetchContactsSuccess = (data) => ({
    type: ATypes.FETCH_CONTACTS_SUCCESS,
    data
})

const fetchContactsFailed = (error) => ({
    type: ATypes.FETCH_CONTACTS_FAILED,
    error
})

const fetchMoreContacts = (keyword, page) => ({
    type: ATypes.LOAD_MORE_CONTACTS,
    keyword,
    page
})

const fetchMoreContactsSuccess = (data) => ({
    type: ATypes.LOAD_MORE_CONTACTS_SUCCESS,
    data
})

const fetchMoreContactsFailed = (error) => ({
    type: ATypes.LOAD_MORE_CONTACTS_FAILED,
    error
})


export default {
    fetchContacts,
    fetchContactsSuccess,
    fetchContactsFailed,
    fetchMoreContacts,
    fetchMoreContactsSuccess,
    fetchMoreContactsFailed
}