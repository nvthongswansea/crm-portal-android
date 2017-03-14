import ATypes from './action_types';

const fetchContacts = () => ({
    type: ATypes.FETCH_CONTACTS
})

const fetchContactsSuccess = (data) => ({
    type: ATypes.FETCH_CONTACTS_SUCCESS,
    payload: data
})

const fetchContactsFailed = (error) => ({
    type: ATypes.FETCH_CONTACTS_FAILED,
    error
})

export default {
    fetchContacts,
    fetchContactsSucess,
    fetchContactsFailed
}