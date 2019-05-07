const calcNumberOfStarsEachType = (rate: number): Array<number> => {
  const integerPart = Math.floor(rate);
  const fractionalPart = rate - integerPart;
  const blankPart = 5 - rate;
  return [integerPart, fractionalPart, blankPart];
};

export default calcNumberOfStarsEachType;
