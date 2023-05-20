//API
// GET https://restcountries.com/v3.1/name/{name}
const endpoint = 'https://restcountries.com/v3.1/name/';

//https://restcountries.com/v3.1/{service}?fields={field},{field},{field}
const filters = '?fields=name,capital,population,flags,languages';

export const fetchCountries = name => {
  return new Promise((resolve, reject) => {
    //Tworzenie zadania HTTP do endpointa i przekazywanie
    //wyników jako tablicy krajów

    fetch(endpoint + name + filters)
      .then(response => {
        if (!response.ok) {
          reject(`Error code ${response.status}`);
        } else {
          return response.json();
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
