import { combineReducers } from 'redux'; 
import LoginReducer from './reducer_login';
import StartReducer from './reducer_start';
const rootReducer = combineReducers({
	LoginReducer,
	StartReducer
});

export default rootReducer;