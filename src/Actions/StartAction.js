import ATypes from './action_types';

const doStart = (navigator) => ({
	type: ATypes.START,
    navigator
});

const finishedStart = () => ({
	type: ATypes.START_FINISHED
});

const doStop = () => ({
    type: ATypes.STOP
})

export default {
    doStart,
    finishedStart,
    doStop
}
