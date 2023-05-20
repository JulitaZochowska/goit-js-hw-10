const endpoint = 'https://restcountries.com/v3.1/name/';

export const fetchCountries = name => {
  return new Promise((resolve, reject) => {
    //Tworzenie zadania HTTP do endpointa i przekazywanie
    //wyników jako tablicy krajów

    fetch(endpoint + name)
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
