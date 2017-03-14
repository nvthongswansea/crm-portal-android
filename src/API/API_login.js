import axios from 'axios';
import { VTIGER_URL } from '../Config/config'
export const login = (username, password) => {
	const data = new FormData();
	data.append('username', username);
	data.append('password', password);
	return axios.post(VTIGER_URL + '/vtigerservice.php?service=restful&do=signinAdmin', data)
		.then(req => {
			if (req.success)
				return {
					username: req.user.username,
					accesskey: req.user.accesskey
				};
			return false;
		})
		.catch(err => {
			console.error('Error: ', err)
		})
	// return fetch(VTIGER_URL + '/vtigerservice.php?service=restful&do=signinAdmin', {
	// 	method: 'POST',
	// 	headers: {
	// 		'Accept': 'application/json',
	// 		'Content-Type': 'multipart/form-data'
	// 	},
	// 	body: data
	// }).then((response) => response.json())
	// 	.then((responseJson) => {
	// 		if (responseJson.success)
	// 			return {
	// 				username: responseJson.user.username,
	// 				accesskey: responseJson.user.accesskey
	// 			};
	// 		return false;
	// 	})
	// 	.catch((error) => {
	// 		console.error(error);
	// 	});
}