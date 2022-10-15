
import { createStore } from 'framework7';
import books from './api/books';
import movies from './api/movies';
import series from './api/tv';

const store = createStore({
  state: {
    products: [
      {
        id: '1',
        title: 'Apple iPhone 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
      },
      {
        id: '2',
        title: 'Apple iPhone 8 Plus',
        description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
      },
      {
        id: '3',
        title: 'Apple iPhone X',
        description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
      },
    ],
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
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
  },
})
export default store;
