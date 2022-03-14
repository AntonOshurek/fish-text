// WORDS
import { WORDS_ENG } from './words/words-eng.js';
import { WORDS_RUS } from './words/words-rus.js';
// CITIES
import { CITIES_RUS } from './cities/cities-rus.js';
import { CITIES_ENG } from './cities/cities-eng.js';
//COUNTRIES
import { COUNTRIES_RUS } from './countries/countries-rus.js';
import { COUNTRIES_ENG } from './countries/countries-eng.js';

import { checkMinMaxValidate, checkCountValidate, getRandomInt, checkTextDataType, checkCountLength } from './utils.js';

let words = WORDS_ENG;
let cities = CITIES_ENG;
let countries = COUNTRIES_ENG;

const fishText = {

  'getWords': (options) => {
    let {count = 1, dataType = 'string', repeat = false, lang = 'eng'} = options;

    let yourWords = [];

    lang === 'rus' ? words = WORDS_RUS : words = WORDS_ENG;

    if (!checkCountValidate(count, 'getWords')) {
      return
    };

    if(repeat && checkCountLength(count, 'getWords', 'words', words.length)) {
      return;
    };

    for(let i = 0; i < count; i++) {
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
    let count;

    lang === 'rus' ? words = WORDS_RUS : words = WORDS_ENG;

    if(!checkMinMaxValidate(min, max, 'getRandomRangeWords')) {
      return;
    } else {
      count = getRandomInt(min, max);
    };

    if(repeat && checkCountLength(count, 'getRandomRangeWords', 'words', words.length)) {
      return;
    };

    for(let i = 0; i < count; i++) {
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
  'getCities': (options) => {
    const {count = 1, dataType = 'string', repeat = false, lang = 'eng'} = options;

    let yourCities = [];

    lang === 'rus' ? cities = CITIES_RUS : cities = CITIES_ENG;

    if (!checkCountValidate(count, 'getCities')) {
      return
    };

    if(repeat && checkCountLength(count, 'getCities', 'city', cities.length)) {
      return;
    };

    for(let i = 0; i < count; i++) {
      const oneCity = cities[getRandomInt(0, cities.length - 1)];

      if(repeat) {
        if (yourCities.some((word) => word === oneCity)) {
          i--;
        } else {
          yourCities.push(oneCity);
        }
      } else {
        yourCities.push(oneCity);
      }
    };

    return checkTextDataType(dataType, yourCities, 'getCities');
  },
  'getRandomRangeCities': (options) => {
    const {min, max, dataType = 'string', repeat = false, lang = 'eng'} = options;

    let count;
    let yourCities = [];

    lang === 'rus' ? cities = CITIES_RUS : cities = CITIES_ENG;

    if(!checkMinMaxValidate(min, max, 'getRandomRangeCities')) {
      return;
    } else {
      count = getRandomInt(min, max);
    };

    if(repeat && checkCountLength(count, 'getRandomRangeCities', 'cities', cities.length)) {
      return;
    };

    for(let i = 0; i < count; i++) {
      const oneCity = cities[getRandomInt(0, cities.length - 1)];

      if(repeat) {
        if (yourCities.some((word) => word === oneCity)) {
          i--;
        } else {
          yourCities.push(oneCity);
        }
      } else {
        yourCities.push(oneCity);
      }
    };

    return checkTextDataType(dataType, yourCities, 'getRandomRangeCities');
  },
  'getCountries': (options) => {
    const {count = 1, dataType = 'string', repeat = false, lang = 'eng'} = options;

    let yourCountries = [];

    lang === 'rus' ? countries = COUNTRIES_RUS : countries = COUNTRIES_ENG;

    if (!checkCountValidate(count, 'getCountries')) {
      return
    };

    if(repeat && checkCountLength(count, 'getCountries', 'country', countries.length)) {
      return;
    };

    for(let i = 0; i < count; i++) {
      const oneCity = countries[getRandomInt(0, countries.length - 1)];

      if(repeat) {
        if (yourCountries.some((word) => word === oneCity)) {
          i--;
        } else {
          yourCountries.push(oneCity);
        }
      } else {
        yourCountries.push(oneCity);
      }
    };

    return checkTextDataType(dataType, yourCountries, 'getCountries');
  },
};

// export { fishText };

// for testing words
  // let result = fishText.getWords({count: 50, dataType: 'array', lang: 'eng', repeat: true});
  // console.log(result)

// for testing cities

console.log(fishText.getCountries({count: 10, lang: 'rus', dataType: 'array', repeat: true}));
