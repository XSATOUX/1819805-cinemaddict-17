
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandom = (array) => array[getRandomPositiveInteger(0, array.length - 1)];

const generateId = () => {
  let counter = 0;
  return () => ++counter;
};

export {getRandomPositiveInteger, getRandom, generateId};
