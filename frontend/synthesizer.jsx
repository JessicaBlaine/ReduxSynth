import React from 'react';
import ReactDOM from 'react-dom';

import Note from './util/note';

import configureStore from './store/store';

window.Note = Note;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<div store={store} />, rootEl);
});
