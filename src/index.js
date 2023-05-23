import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import _ from 'lodash';
import Notiflix from 'notiflix';

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
  //czyli countries to odpowiedz serwera na nasz request
  fetchCountries(value)
    .then(countries => {
      //Zostawiam, aby sprawdzić w konsoli
      console.log(countries);
      //

      let countriesListItems = '';
      if (countries.length >= 2 && countries.length <= 10) {
        for (const country of countries) {
          //country.name.official bo tak jest to opisane w API
          countriesListItems += `<li> <img class="flag-img" src="${country.flags.svg}" alt="${country.name.officiale} flag" />${country.name.official}</li>`;
        }
        countryList.innerHTML = countriesListItems;
        return;
      }
      if (countries.length === 1) {
        const country = countries[0];
        countryList.innerHTML = `<h2>${
          country.name.official
        }</h2> <p>Capital: ${country.capital}</p> <p>Population: ${
          country.population
        }</p> <p>Languages: ${Object.values(
          country.languages
        )}</p> <img class="flag-img" src="${country.flags.svg}" alt="${
          country.name.officiale
        } flag" />`;
        return;
      }
      if (countries.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
    })
    .catch(err => {
      Notiflix.Notify.failure('Oops, there is no country with that name.');
    });
}, DEBOUNCE_DELAY);

//bo debounced maił być na handlerze
function handleSearch(event) {
  debounced(event.target.value.trim());
}
