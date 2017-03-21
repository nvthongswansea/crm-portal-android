import ATypes from './action_types';
//Dinh nghia cac action lien quan toi dang nhap
//Cac action return 1 object tuong ung voi moi hanh dong

const doLogin = (username, password, navigator) => ({
	type: ATypes.LOGIN,
	username,
	password,
	navigator
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