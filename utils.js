const checkCountValidate = (count, functionName = 'getCities') => {
  if(Math.sign(count) === -1 || Math.sign(count) === -0) {
    console.error(`count: ${count} ERROR! parameters cannot be negative! example - fishText.${functionName}({count: 25})`);
    return false;
  };

  return true;
};

const checkMinMaxValidate = (min, max, functionName = 'getCities') => {
  if((!min || !max) && (min != 0 && max != 0)) {
    console.error(`${functionName} ERROR! min and max parameters is required! example - fishText.${functionName}({min: 10, max: 20})`);
    return false;
  };

  if(Math.sign(min) === -1 || Math.sign(max) === -1 ) {
    console.error(`min: ${min} max: ${max} ERROR! parameters cannot be negative! example - fishText.${functionName}({min: 10, max: 20})`);
    return false;
  };

  if(min > max) {
    console.error(`min: ${min} > max: ${max} ERROR! the maximum number cannot be less than the minimum! example - fishText.${functionName}({min: 10, max: 20})`);
    return false;
  };

  return true;
};

const checkTextDataType = (dataType, data, functionName, punctuationMark = false) => {
  switch (dataType) {
    case 'string':
      if(punctuationMark) {
        return data.join(', ').toLowerCase();
      } else {
        return data.join(' ').toLowerCase();
      }
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

const checkCountLength = (count, functionName, dataName, arrayToCheck) => {
  if (count > arrayToCheck) {
    console.error(`${functionName} function error - maximum number of ${dataName} without repetition ` + arrayToCheck);
    return true;
  };
};

const getRandomInt = (minValue, maxValue) => {
  if((Math.sign(minValue) === -1) || (Math.sign(maxValue) === -1) || minValue >= maxValue) {
    console.error('minValue or maxValue in fish-text they have the wrong value');
    return;
  };
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

const generateData = (dataArray, count, repeat) => {
  let newData = [];

  for(let i = 0; i < count; i++) {
    const item = dataArray[getRandomInt(0, dataArray.length - 1)];

    if(repeat) {
      if (newData.some((word) => word === item)) {
        i--;
      } else {
        newData.push(item);
      }
    } else {
      newData.push(item);
    }
  };

  return newData;
};

export { checkMinMaxValidate, checkCountValidate, getRandomInt, checkTextDataType, checkCountLength, generateData };
