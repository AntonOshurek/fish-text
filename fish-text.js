// WORDS
import { ENGLISH_WORDS } from './words/eng-words.js';
import { RUSSIAN_WORDS } from './words/rus-words.js';
// CITIES
import { CITIES_RUS } from './cities/cities-rus.js';
import { CITIES_ENG } from './cities/cities-eng.js';

import { checkMinMaxValidate, checkWordsCountValidate, getRandomInt, checkTextDataType } from './utils.js';

let words = ENGLISH_WORDS;
let cities = CITIES_ENG;

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

const checkCountLength = (count, functionName, arrayToCheck) => {
  if (count > arrayToCheck) {
    console.error(`${functionName} function error - maximum number of words without repetition ` + arrayToCheck);
    return true
  }
};

const fishText = {

  'getWords': (options) => {
    let {wordsCount, dataType = 'string', repeat = false, lang = 'eng'} = options;

    let yourWords = [];

    checkLanguage(lang, 'getWords');

    if (!checkWordsCountValidate(wordsCount)) {
      return
    };

    if(repeat && checkCountLength(wordsCount, 'getWords', words.length)) {
      return;
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
    let {min, max, dataType = 'string', repeat = false, lang = 'eng'} = options;

    let yourWords = [];

    if(!checkMinMaxValidate(min, max)) {
      return;
    };

    const wordsCount = getRandomInt(min, max);

    checkLanguage(lang, 'getRandomRangeWords');

    if(repeat && checkCountLength(wordsCount, 'getRandomRangeWords', words.length)) {
      return;
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
  'getCity': (options) => {

    const {lang = 'eng'} = options;

    let yourCity;

    // switch (lang) {
    //   case 'rus':
    //     cities = CITIES_RUS;
    //   break;
    //   case 'eng':
    //     cities = CITIES_ENG;
    //   break;
    //   default:
    //     console.error(`incorrect language name in ...`);
    // };

    lang === 'rus' ? cities = CITIES_RUS : cities = CITIES_ENG;

    yourCity = cities[getRandomInt(0, cities.length)];

    return yourCity;

  },
  'getCities': (options) => {
    const {min, max, dataType = 'string', repeat = false, lang = 'eng'} = options;

    if(!checkMinMaxValidate(min, max)) {
      return;
    };

    const citiesCount = getRandomInt(min, max);
    let yourCities = [];
  },
};

// export { fishText };

// for testing words
  // let result = fishText.getWords({wordsCount: 2000, dataType: 'string', lang: 'eng', repeat: true});
  // console.log(result)

// for testing cities

console.log(fishText.getCity({lang: 'eng'}));
