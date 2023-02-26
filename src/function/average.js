const average = (array) => {
  const summary = array.reduce((sum, currentValue) => (sum += currentValue));

  const result = summary / array.length;

  return result;
};

export { average };
