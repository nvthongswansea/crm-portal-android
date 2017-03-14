import ATypes from './action_types';

const doLogin = (username, password) => ({
	type: ATypes.LOGIN,
	username,
	password
})

const loginSuccess = (accesskey, username) => ({
	type: ATypes.LOGIN_SUCCESS,
	accesskey,
	username
})

const loginFailed = (error) => ({
	type: ATypes.LOGIN_FAILED,
	error
})

export default {
	doLogin,
	loginSuccess,
	loginFailed
}