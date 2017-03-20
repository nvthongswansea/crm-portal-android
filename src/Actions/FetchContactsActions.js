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

export default {
    fetchContacts,
    fetchContactsSuccess,
    fetchContactsFailed
}