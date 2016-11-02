import merge from 'lodash/merge';
import { START_RECORDING,
         STOP_RECORDING,
         ADD_NOTES } from '../actions/track_actions';

let curTrackId = -1;

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_RECORDING:
      curTrackId += 1;
      return merge({}, state, {
        [curTrackId]: {
          id: curTrackId,
          name: `Track #${curTrackId + 1}`,
          roll: [],
          timeStart: action.timeNow,
        },
      });
    case STOP_RECORDING:
      return merge({}, state, {
        [curTrackId]: {
          roll: [
            ...state.roll,
            {
              notes: [],
              timeSlice: action.timeNow - state[curTrackId].timeStart,
            },
          ],
        },
      });
    case ADD_NOTES:
      return merge({}, state, {
        [curTrackId]: {
          roll: [
            ...state.roll,
            {
              notes: action.notes,
              timeSlice: action.timeNow - state[curTrackId].timeStart,
            },
          ],
        }
      });
    default:
      return state;
  }
};

export default tracksReducer;
