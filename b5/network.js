// https://api.themoviedb.org/3/search/movie?query=badman&api_key=cfe422613b250f702980a3bbf9e90716

const fetch = require('node-fetch');

// viet ham lay du lieu tu api ve
getDataMovies = async (nameMovie) => {
  const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${nameMovie}=&api_key=cfe422613b250f702980a3bbf9e90716`);
  return data.json();
};
// vi async ... await tra ve promies
getDataMovies('badman').then(dt => console.log(dt));