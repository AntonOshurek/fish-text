const checkWordsCountValidate = (wordsCount) => {
  if(!wordsCount) {
    console.error('wordsCount parameters is required! example - fishText.getWords({wordsCount: 25})');
    return false;
  }

  if(Math.sign(wordsCount) === -1 || Math.sign(wordsCount) === -0) {
    console.error(`wordsCount:  ${wordsCount} ERROR! parameters cannot be negative! example - fishText.getWords({wordsCount: 25})`);
    return false;
  }

  return true;
};

const checkMinMaxValidate = (min, max) => {
  if((!min || !max) && (min != 0 && max != 0)) {
    console.error('min and max parameters is required! example - getRandomRangeWords({min: 10, max: 20})');
    return false;
  };

  if(Math.sign(min) === -1 || Math.sign(max) === -1 ) {
    console.error(`min: ${min} max: ${max} ERROR! parameters cannot be negative! example - fishText.getRandomRangeWords({min: 10, max: 20})`);
    return false;
  }

  if(min > max) {
    console.error(`min: ${min} > max: ${max} ERROR! the maximum number cannot be less than the minimum! example - fishText.getRandomRangeWords({min: 10, max: 20})`);
    return false;
  }

  return true;
};

const checkTextDataType = (dataType, data, functionName) => {
  switch (dataType) {
    case 'string':
      return data.join(' ').toLowerCase();
    break;
    case 'array':
      return data;
    break;
    case 'object':
      return Object.assign({}, data);;
    break;
    default:
      console.error(`incorrect text type parametr in ${functionName} function`);
  };
};

const checkCountLength = (count, functionName, arrayToCheck) => {
  if (count > arrayToCheck) {
    console.error(`${functionName} function error - maximum number of words without repetition ` + arrayToCheck);
    return true
  }
};

const getRandomInt = (minValue, maxValue) => {
  if((Math.sign(minValue) === -1) || (Math.sign(maxValue) === -1) || minValue >= maxValue) {
    console.error('minValue or maxValue in fish-text they have the wrong value');
    return;
  }
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};


export { checkMinMaxValidate, checkWordsCountValidate, getRandomInt, checkTextDataType, checkCountLength };
