import axios from 'axios';

class DataSource {
  static searchMovie(keyword) {
    return axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: '957b782a28833852f66b711ed65e195f',
        language: 'en-US',
        page: 1,
        query: keyword,
      },
    })
      .then(response => {
        const { data } = response;
        if (data.results && data.results.length > 0) {
          return Promise.resolve(data.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
