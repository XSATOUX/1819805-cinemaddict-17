
const generateId = () => {
  let counter = 0;
  return () => ++counter;
};

const ESCAPE_KEYS = ['Escape', 'Esc'];

const isEscapeEvent = (evt) => ESCAPE_KEYS.includes(evt.key);

export {generateId, isEscapeEvent};
