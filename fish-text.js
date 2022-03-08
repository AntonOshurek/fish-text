import { ENGLISH_WORDS } from "./eng-words.js";

const words = ENGLISH_WORDS;

const getRandomInt = (minValue, maxValue) => {
  if((Math.sign(minValue) === -1) || (Math.sign(maxValue) === -1) || minValue >= maxValue) {
    throw new Error('minValue or maxValue in fish-text they have the wrong value');
  }
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

const checkTextDataType = (parametr, data, functionName) => {
  switch (parametr) {
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

const checkCountLength = (count, functionName) => {
  if (count > words.length) {
    console.error(`${functionName} function error - maximum number of words without repetition ` + words.length);
    return true
  }
};

const fishText = {

  'getWords': (wordsCount, textDataType = 'string', repeat = false) => {
    let yourWords = [];

    if(repeat && checkCountLength(wordsCount, 'getWords')) {
      return
    }

    for(let i = 0; i < wordsCount; i++) {
      const oneWord = words[getRandomInt(0, words.length - 1)];

      if(repeat) {
        if (yourWords.some((word) => word === oneWord)) {
          i--;
        } else {
          yourWords.push(oneWord);
        }
      } else {
        yourWords.push(oneWord);
      }
    };

    return checkTextDataType(textDataType, yourWords, 'getWords');
  },
  'getRandomRangeWords': (min, max, textDataType = 'string', repeat = false) => {
    const wordsCount = getRandomInt(min, max);
    let yourWords = [];

    if(repeat && checkCountLength(wordsCount, 'getRandomRangeWords')) {
      return
    }

    for(let i = 0; i < wordsCount; i++) {
      const oneWord = words[getRandomInt(0, words.length - 1)];

      if(repeat) {
        if (yourWords.some((word) => word === oneWord)) {
          i--;
        } else {
          yourWords.push(oneWord);
        }
      } else {
        yourWords.push(words[getRandomInt(0, words.length - 1)]);
      }
    };

    return checkTextDataType(textDataType, yourWords, 'getRandomRangeWords');


  },

};

// export { fishText };

let result = fishText.getRandomRangeWords(10, 20, 'array');

console.log(result)
