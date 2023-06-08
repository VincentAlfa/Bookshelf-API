const { addBookHandler, getAllBookHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler,
  },
  {
    method: 'PUT',
    path: '/books',
    handler: () => {

    },
  },
  {
    method: 'DELETE',
    path: '/books',
    handler: () => {

    },
  },

];

module.exports = routes;
