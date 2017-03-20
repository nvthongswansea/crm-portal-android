import axios from 'axios';
import {VTIGER_URL} from '../Config/config';

export const fetchContacts = (page, keyword) => {
    const data = new FormData();
	data.append('norecords', 10);
	data.append('page', page);
	data.append('keyword', keyword);
	return axios.post(VTIGER_URL + '/vtigerservice.php?service=restful&do=contacttablepagi', data)
		.then(req => {
			return req.data;
		})
		.catch(err => {
			console.error('Error: ', err)
		})
}