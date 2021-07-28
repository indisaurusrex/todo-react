const donePercentCalculator = (items) => {
  let doneCount = 0;
  items.map((item) => {
    if (item.done) {
      doneCount += 1;
    }
    return doneCount;
  });
  return Math.round((doneCount / items.length + Number.EPSILON) * 100) || 0;
};

export default donePercentCalculator;
