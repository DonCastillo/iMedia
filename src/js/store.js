
import { createStore } from 'framework7';
import books from './api/books';
import movies from './api/movies';
import series from './api/tv';

const store = createStore({
  state: {
    movies: movies,
    books: books,
    series: series,
  },
  getters: {
    products({ state }) {
      return state.products;
    },
    movies({ state }) {
      return state.movies;
    },
    books({ state }) {
      return state.books;
    },
    tv({ state }) {
      return state.series;
    },
  },
  actions: {
    getMovie({ state, dispatch }, { id }) {
      return state.movies.find(movie => movie.id == id);
    },
    getBook({ state, dispatch }, { id }) {
      return state.books.find(book => book.id == id);
    },
    getTV({ state, dispatch }, { id }) {
      return state.series.find(tv => tv.id == id);
    },
  },
})
export default store;
