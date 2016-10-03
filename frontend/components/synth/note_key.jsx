

import React, { PropTypes } from 'react';

const NoteKey = ({ note, pressed }) => (
  <div className={pressed ? 'note-key' : 'note-key pressed'}>
    {note}
  </div>
);

NoteKey.propTypes = {
  note: PropTypes.string.isRequired,
  pressed: PropTypes.bool,
};

export default NoteKey;
