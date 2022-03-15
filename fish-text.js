// WORDS
import { WORDS_ENG } from './words/words-eng.js';
import { WORDS_RUS } from './words/words-rus.js';
// CITIES
import { CITIES_RUS } from './cities/cities-rus.js';
import { CITIES_ENG } from './cities/cities-eng.js';
//COUNTRIES
import { COUNTRIES_RUS } from './countries/countries-rus.js';
import { COUNTRIES_ENG } from './countries/countries-eng.js';
//NAMES
import { NAMES_RUS } from './fullNames/names-rus.js';
import { NAMES_ENG } from './fullNames/names-eng.js';
//SURNAMES
import { SURNAMES_RUS } from './fullNames/surnames-rus.js';
import { SURNAMES_ENG } from './fullNames/surnames-eng.js';

import { checkMinMaxValidate, checkCountValidate, getRandomInt, checkTextDataType, checkCountLength, generateData } from './utils.js';

let wordsArray = WORDS_ENG;
let citiesArray = CITIES_ENG;
let countriesArray = COUNTRIES_ENG;
let namesArray = NAMES_ENG;
let surnamesArray = SURNAMES_ENG;

export const fishText = {

  'getWords': (options) => {
    let {count = 1, dataType = 'string', repeat = false, lang = 'eng'} = options;

    lang === 'rus' ? wordsArray = WORDS_RUS : wordsArray = WORDS_ENG;

    if (!checkCountValidate(count, 'getWords')) {
      return
    };

    if(repeat && checkCountLength(count, 'getWords', 'words', wordsArray.length)) {
      return;
    };

    let result = generateData(wordsArray, count, repeat);

    return checkTextDataType(dataType, result, 'getWords');
  },
  'getRandomRangeWords': (options) => {
    let {min, max, dataType = 'string', repeat = false, lang = 'eng'} = options;

    let count;

    lang === 'rus' ? wordsArray = WORDS_RUS : wordsArray = WORDS_ENG;

    if(!checkMinMaxValidate(min, max, 'getRandomRangeWords')) {
      return;
    } else {
      count = getRandomInt(min, max);
    };

    if(repeat && checkCountLength(count, 'getRandomRangeWords', 'words', wordsArray.length)) {
      return;
    };

    let result = generateData(wordsArray, count, repeat);

    return checkTextDataType(dataType, result, 'getRandomRangeWords');
  },
  'getCities': (options) => {
    const {count = 1, dataType = 'string', repeat = false, lang = 'eng'} = options;

    lang === 'rus' ? citiesArray = CITIES_RUS : citiesArray = CITIES_ENG;

    if (!checkCountValidate(count, 'getCities')) {
      return
    };

    if(repeat && checkCountLength(count, 'getCities', 'city', citiesArray.length)) {
      return;
    };

    let result = generateData(citiesArray, count, repeat);

    return checkTextDataType(dataType, result, 'getCities');
  },
  'getRandomRangeCities': (options) => {
    const {min, max, dataType = 'string', repeat = false, lang = 'eng'} = options;

    let count;

    lang === 'rus' ? citiesArray = CITIES_RUS : citiesArray = CITIES_ENG;

    if(!checkMinMaxValidate(min, max, 'getRandomRangeCities')) {
      return;
    } else {
      count = getRandomInt(min, max);
    };

    if(repeat && checkCountLength(count, 'getRandomRangeCities', 'cities', citiesArray.length)) {
      return;
    };

    let result = generateData(citiesArray, count, repeat);

    return checkTextDataType(dataType, result, 'getRandomRangeCities');
  },
  'getCountries': (options) => {
    const {count = 1, dataType = 'string', repeat = false, lang = 'eng'} = options;

    lang === 'rus' ? countriesArray = COUNTRIES_RUS : countriesArray = COUNTRIES_ENG;

    if (!checkCountValidate(count, 'getCountries')) {
      return
    };

    if(repeat && checkCountLength(count, 'getCountries', 'country', countriesArray.length)) {
      return;
    };

    let result = generateData(countriesArray, count, repeat);

    return checkTextDataType(dataType, result, 'getCountries');
  },
  'getRandomRangeCountries': (options) => {
    const {min, max, dataType = 'string', repeat = false, lang = 'eng'} = options;

    let count;

    lang === 'rus' ? countriesArray = COUNTRIES_RUS : countriesArray = COUNTRIES_ENG;

    if(!checkMinMaxValidate(min, max, 'getRandomRangeCountries')) {
      return;
    } else {
      count = getRandomInt(min, max);
    };

    if(repeat && checkCountLength(count, 'getRandomRangeCountries', 'country', countriesArray.length)) {
      return;
    };

    let result = generateData(countriesArray, count, repeat);

    return checkTextDataType(dataType, result, 'getRandomRangeCountries');
  },
  'getNames': (options) => {
    const {count = 1, dataType = 'string', repeat = false, lang = 'eng', type = 'full'} = options;

    if(lang === 'rus') {
      namesArray = NAMES_RUS;
      surnamesArray = SURNAMES_RUS;
    } else {
      namesArray = NAMES_ENG;
      surnamesArray = SURNAMES_ENG;
    }

    if (!checkCountValidate(count, 'getNames')) {
      return
    };

    if(repeat && (checkCountLength(count, 'getCountries', 'country', namesArray.length) && checkCountLength(count, 'getCountries', 'country', surnamesArray.length))) {
      return;
    };

    let result;

    switch(type) {
      case 'full':
        let newData = [];

        for(let i = 0; i < count; i++) {
          const onename = namesArray[getRandomInt(0, namesArray.length - 1)];
          const onesurname = surnamesArray[getRandomInt(0, surnamesArray.length - 1)];

          newData.push(onename + ' ' + onesurname);
        };


        result = newData;
        break;
      case 'name':
        result = generateData(namesArray, count, repeat);
        break;
      case 'surname':
        result = generateData(surnamesArray, count, repeat);
        break;
        default:
          console.error('error type parametr!');
    };

    return checkTextDataType(dataType, result, 'getNames', true);
  },
};

// for testing words
  // let result = fishText.getRandomRangeWords({min: 50, max: 60, dataType: 'array', lang: 'eng', repeat: true});
  // console.log(result)

// for testing cities

// console.log(fishText.getCountries({ dataType: 'string', lang: 'eng', repeat: false}));

console.log(fishText.getNames({count: 20, lang: 'eng', type: 'full', dataType: 'string'}))
