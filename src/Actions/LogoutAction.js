import ATypes from './action_types';

const doLogout = (navigator) => ({
    type: ATypes.LOGOUT,
    navigator
})

const finishLogout = () => ({
    type: ATypes.LOGOUT_FINISHED
})

export default {
    doLogout,
    finishLogout
}