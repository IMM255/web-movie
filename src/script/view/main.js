import DataSource from '../data/data-source';
import '../components/search-bar';
import '../components/movie-list';

const main = () => {
    const searchElement = document.querySelector('search-bar');
    const movieListElement = document.querySelector('movie-list');
    const onButtonSearchClicked = async () => {
      try{
        const result = await DataSource.searchMovie(searchElement.value);
            renderResult(result);
      }catch(message){
        fallbackResult(message);
      };
    };
  
    const renderResult =  (results) => {
      movieListElement.movies = results;
    };
  
    const fallbackResult =  message => {
      movieListElement.renderError(message);
    };
    
  
    searchElement.clickEvent = onButtonSearchClicked;
    
};
export default main;