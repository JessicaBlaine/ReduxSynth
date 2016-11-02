import { createStore } from 'redux';
import reducer from '../reducers';

const preloadedState = {
  notes: [],
  tracks: {},
  isRecording: false,
  isPlaying: false,
};

export default (state = preloadedState) => (
  createStore(reducer, state)
);
