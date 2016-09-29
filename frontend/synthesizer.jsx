import React from 'react';
import ReactDOM from 'react-dom';

import Note from './util/note';

window.Note = Note;

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<div />, rootEl);
});
