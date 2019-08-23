const getRandomNum = (min = 1, max = 1000) => {
  const result = Math.round(min - 0.5 + Math.random() * (max - min + 1));
  return result;
};

export default getRandomNum;
