import React, { PropTypes } from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(n => new Note(TONES[n]));
  }

  render() {
    return (
      <ul>
        {
          this.notes.map(n => <li>{n.freq}</li>)
        }
      </ul>)
    ;
  }
}

export default Synth ;
