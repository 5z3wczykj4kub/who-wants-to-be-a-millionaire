function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateAskTheAudiencePercentages(isFiftyFiftyLifelineUsed = false) {
  const correctAnwserPercentage = getRandomIntInclusive(60, 100);
  const pretcentagesArray = [correctAnwserPercentage];
  let remainingPercentages = 100 - correctAnwserPercentage;

  if (isFiftyFiftyLifelineUsed) {
    return [...pretcentagesArray, remainingPercentages, 0, 0];
  }

  while (remainingPercentages > 0) {
    if (pretcentagesArray.length === 3) {
      pretcentagesArray.push(remainingPercentages);
      break;
    }
    const nextPercentage = getRandomIntInclusive(0, remainingPercentages);
    pretcentagesArray.push(nextPercentage);
    remainingPercentages -= nextPercentage;
  }
  if (pretcentagesArray.length === 1) return [...pretcentagesArray, 0, 0, 0];
  if (pretcentagesArray.length === 2) return [...pretcentagesArray, 0, 0];
  if (pretcentagesArray.length === 3) return [...pretcentagesArray, 0];
  return pretcentagesArray;
}

export default generateAskTheAudiencePercentages;
