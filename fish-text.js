import { ENGLISH_WORDS } from "./words/eng-words.js";
import { RUSSIAN_WORDS } from './words/rus-words.js';

import { checkMinMaxValidate, checkWordsCountValidate, getRandomInt, checkTextDataType } from './utils.js';

let words = ENGLISH_WORDS;

const checkLanguage = (lang, functionName) => {
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

let result = fishText.getWords({wordsCount: 100, dataType: 'string', lang: 'eng'});

console.log(result)
