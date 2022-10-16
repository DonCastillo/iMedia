import store from './store';
import MovieList from '../pages/movie-list.f7';
import MovieSingle from '../pages/movie-single.f7';
import BookList from '../pages/book-list.f7';
import BookSingle from '../pages/book-single.f7';
import TVList from '../pages/tv-list.f7';
import TVSingle from '../pages/tv-single.f7';

import NotFoundPage from '../pages/404.f7';

console.log('inside routes: ', store);


var routes = [
  {
    path: '/movies/',
    async: async function({ router, to, resolve }) {
      const app = router.app;
      app.preloader.show();
      const movies = await store.getters.movies;
      app.preloader.hide();
      resolve({component: MovieList}, {props: {movies: movies}});
    }
  },
  {
    path: '/movies/:id',
    async: async function({ router, to, resolve }) {
      const app = router.app;
      app.preloader.show();
      const movie = await store.dispatch('getMovie', {id: to.params.id});
      app.preloader.hide();
      resolve({component: MovieSingle}, {props: {movie: movie}});
    }
  },
  {
    path: '/books/',
    async: async function({ router, to, resolve }) {
      const app = router.app;
      app.preloader.show();
      const books = await store.getters.books;
      app.preloader.hide();
      resolve({component: BookList}, {props: {books: books}});
    }
  },
  {
    path: '/books/:id',
    async: async function({ router, to, resolve }) {
      const app = router.app;
      app.preloader.show();
      const book = await store.dispatch('getBook', {id: to.params.id});
      app.preloader.hide();
      resolve({component: BookSingle}, {props: {book: book}});
    }
  },
  {
    path: '/tv/',
    async: async function({ router, to, resolve }) {
      const app = router.app;
      app.preloader.show();
      const tv = await store.getters.tv;
      app.preloader.hide();
      resolve({component: TVList}, {props: {tv: tv}});
    }
  },
  {
    path: '/tv/:id',
    async: async function({ router, to, resolve }) {
      const app = router.app;
      app.preloader.show();
      const tv = await store.dispatch('getTV', {id: to.params.id});
      app.preloader.hide();
      resolve({component: TVSingle}, {props: {tv: tv}});
    }
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;