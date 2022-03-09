import { ENGLISH_WORDS } from "./eng-words.js";

import { rusWords } from './rus-words.js';

const words = ENGLISH_WORDS;

const getRandomInt = (minValue, maxValue) => {
  if((Math.sign(minValue) === -1) || (Math.sign(maxValue) === -1) || minValue >= maxValue) {
    throw new Error('minValue or maxValue in fish-text they have the wrong value');
  }
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
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

const checkCountLength = (count, functionName) => {
  if (count > words.length) {
    console.error(`${functionName} function error - maximum number of words without repetition ` + words.length);
    return true
  }
};

const fishText = {

  'getWords': (options) => {
    let {wordsCount, dataType = 'string', repeat = false} = options;

    if(!wordsCount) {
      console.error('wordsCount parameters is required! example - fishText.getWords({wordsCount: 25})')
    }

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

    return checkTextDataType(dataType, yourWords, 'getWords');
  },
  'getRandomRangeWords': (options) => {
    let {min, max, dataType = 'string', repeat = false} = options;

    if(!min || !max) {
      console.error('min and max parameters is required! example - getRandomRangeWords({min: 10, max: 20})')
    }

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
        yourWords.push(oneWord);
      }
    };

    return checkTextDataType(dataType, yourWords, 'getRandomRangeWords');
  },

};

// export { fishText };

let result = fishText.getWords({wordsCount: 25, dataType: 'string'});

console.log(result)

let foo;

for(let i = 1; i < 100; i++) {
  foo += rusWords[i] + ' ';
}

console.log(foo)
