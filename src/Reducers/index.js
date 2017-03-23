import { combineReducers } from 'redux'; 
import LoginReducer from './reducer_login';
import StartReducer from './reducer_start';
import FetchContactReducer from './reducer_fetchContacts';
import LogoutReducer from './reducer_logout';
import FetchContactDetailReducer from './reducer_fetchContactDetail';

const rootReducer = combineReducers({
	LoginReducer,
	StartReducer,
	FetchContactReducer,
	LogoutReducer,
	FetchContactDetailReducer
});

export default rootReducer;