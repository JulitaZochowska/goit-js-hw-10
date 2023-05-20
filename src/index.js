import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import _ from 'lodash';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

searchBox.addEventListener('input', handleSearch);

const debounced = _.debounce(value => {
  if (value === '') {
    countryList.innerHTML = '';
    return;
  }
  //debounced jest wrapem dla funkcji fetchCountries
  //funkcja fetchCountries zwraca promisa dlatego dalej obsługujemy to jak jak promise (then)
  //gdybym nie dała then(countries) to w konsoli nie wyświetliłaby się lista krajów
  //to co zwrócone resolve (data) linia 18 FetchCountries.js wskakuje do then(countries)
  fetchCountries(value).then(countries => {
    //Zostawiam, aby sprawdzić w konsoli
    console.log(countries);
    //

    let countriesListItems = '';
    for (const country of countries) {
      //country.name.official bo tak jest to opisane w API
      countriesListItems += `<li>${country.name.official}</li>`;
    }
    countryList.innerHTML = countriesListItems;
  });
}, DEBOUNCE_DELAY);

//bo debounced maił być na handlerze
function handleSearch(event) {
  debounced(event.target.value.trim());
}
