
const generateId = () => {
  let counter = 0;
  return () => ++counter;
};

export {generateId};
