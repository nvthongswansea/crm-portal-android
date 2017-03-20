import { combineReducers } from 'redux'; 
import LoginReducer from './reducer_login';
import StartReducer from './reducer_start';
import FetchContactReducer from './reducer_fetchContacts';

const rootReducer = combineReducers({
	LoginReducer,
	StartReducer,
	FetchContactReducer
});

export default rootReducer;