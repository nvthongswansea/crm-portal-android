import ATypes from './action_types';

const doLogout = (navigator) => ({
    type: ATypes.LOGOUT,
    navigator
})

const finishLogout = (navigator) => ({
    type: ATypes.LOGOUT_FINISHED,
    navigator
})

export default {
    doLogout,
    finishLogout
}