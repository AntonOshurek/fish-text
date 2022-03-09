import { ENGLISH_WORDS } from "./eng-words.js";
import { RUSSIAN_WORDS } from './rus-words.js';

let words = ENGLISH_WORDS;

const getRandomInt = (minValue, maxValue) => {
  if((Math.sign(minValue) === -1) || (Math.sign(maxValue) === -1) || minValue >= maxValue) {
    console.error('minValue or maxValue in fish-text they have the wrong value');
    return;
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

const checkLanguage = (lang, functionName) => {
  // let words;
  switch(lang) {
    case 'rus':
      words = RUSSIAN_WORDS;
    break;
    case 'eng':
      words = ENGLISH_WORDS;
    break;
    default:
      console.error(`incorrect language name in ${functionName} function! example - fishText.${functionName}({wordsCount: 25, lang: 'rus'})`);
  }
};

const checkCountLength = (count, functionName) => {
  if (count > words.length) {
    console.error(`${functionName} function error - maximum number of words without repetition ` + words.length);
    return true
  }
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

const fishText = {

  'getWords': (options) => {
    let {wordsCount, dataType = 'string', repeat = false, lang = 'eng'} = options;

    if (!checkWordsCountValidate(wordsCount)) {
      return
    };

    if(repeat && checkCountLength(wordsCount, 'getWords')) {
      return;
    }

    checkLanguage(lang, 'getWords');

    let yourWords = [];

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
    let {min, max, dataType = 'string', repeat = false, lang = 'eng'} = options;

    if(!checkMinMaxValidate(min, max)) {
      return;
    };

    if(repeat && checkCountLength(wordsCount, 'getRandomRangeWords')) {
      return;
    }

    checkLanguage(lang, 'getRandomRangeWords');

    const wordsCount = getRandomInt(min, max);
    let yourWords = [];

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

let result = fishText.getWords({wordsCount: 10, dataType: 'string', lang: 'rus'});

console.log(result)
