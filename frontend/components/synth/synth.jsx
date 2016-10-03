import React, { PropTypes } from 'react';
import $ from 'jquery';

import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';
import NoteKey from './note_key';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.reduce((obj, name) => (
      Object.assign({}, obj, { [name]: new Note(TONES[name]) })
    ), {});
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  componentWillUnmount() {
    $(document).off('keyDown');
    $(document).off('keyUp');
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
  }

  playNotes() {
    NOTE_NAMES.forEach(note => {
      if (this.props.notes.includes(note)) {
        this.notes[note].start();
      } else {
        this.notes[note].stop();
      }
    });
  }

  render() {
    this.playNotes();
    const noteKeys = NOTE_NAMES.map(note => (
      <NoteKey
        key={note}
        note={note}
        pressed={!this.props.notes.includes(note)}
      />
    ));
    return (
      <div className="synth">
        {noteKeys}
      </div>
    );
  }
}

Synth.propTypes = {
  keyPressed: PropTypes.func.isRequired,
  keyReleased: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Synth;
