// nhung thu vien axios
const axios = require('axios');
getDataMovies = async (name) => {
  const data = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${name}=&api_key=cfe422613b250f702980a3bbf9e90716`);
  return data;
}
getDataMovies('badman').then(dt => console.log(dt.data));