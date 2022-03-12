// WORDS
import { ENGLISH_WORDS } from './words/eng-words.js';
import { RUSSIAN_WORDS } from './words/rus-words.js';
// CITIES
import { CITIES_RUS } from './cities/cities-rus.js';
import { CITIES_ENG } from './cities/cities-eng.js';
//COUNTRIES
import { COUNTRIES_RUS } from './countries/countries-rus.js';
import { COUNTRIES_ENG } from './countries/countries-eng.js';

import { checkMinMaxValidate, checkWordsCountValidate, getRandomInt, checkTextDataType } from './utils.js';

let words = ENGLISH_WORDS;
let cities = CITIES_ENG;

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

    lang === 'rus' ? words = RUSSIAN_WORDS : words = ENGLISH_WORDS;

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

    lang === 'rus' ? words = RUSSIAN_WORDS : words = ENGLISH_WORDS;

    if(!checkMinMaxValidate(min, max)) {
      return;
    };

    const wordsCount = getRandomInt(min, max);

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
  let result = fishText.getRandomRangeWords({min: 100, max: 150, dataType: 'array', lang: 'rus', repeat: true});
  console.log(result)

// for testing cities

console.log(fishText.getCity({lang: 'eng'}));
