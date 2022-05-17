const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandom = (array) => array[getRandomPositiveInteger(0, array.length - 1)];

const getRandomDate = (startDate, endDate) => new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

export {getRandomPositiveInteger, getRandomDate,getRandom};
