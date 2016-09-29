import { createStore } from 'redux';
import reducer from '../reducers';

export default (preLoadedState = {}) => (
  createStore(reducer, preLoadedState)
);
