import {
	fork
} from 'redux-saga/effects';
import {startFlow} from './start_saga';
import ATypes from '../Actions/action_types';

export default function* () {
	yield [
		fork(startFlow)
	]
}
