import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { useDebounce } from 'use-lodash-debounce';

const DEBOUNCE_DELAY = 300;
const debounced = debounce(() => {
  console.log('delayed');
}, 300);

//API
// GET https://restcountries.com/v3.1/name/{name}
const filterResponse =
  'https://restcountries.com/v3.1/{service}?fields=name,capital,population,flags,languages';

const searchBox = document.querySelector('#search-box');

searchBox.addEventListener('input', handleSearch);

function handleSearch(event) {
  fetchCountries(event.value);
}
