
import { NOTE_NAMES } from '../util/tones';

const notes = (state = [], action) => {
  const isValidNote = NOTE_NAMES.includes(action.key);
  const idx = state.indexOf(action.key);

  switch (action.type) {
    case 'KEY_PRESSED':
      if (isValidNote && idx === -1) {
        return [
          ...state,
          action.key,
        ];
      }
      return state;
    case 'KEY_RELEASED':
      if (isValidNote && idx !== -1) {
        return [
          state.slice(0, idx),
          state.slice(idx + 1),
        ];
      }
      return state;
    default:
      return state;
  }
};

export default notes;
