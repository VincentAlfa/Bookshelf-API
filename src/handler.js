const { nanoid } = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;
  const id = nanoid(16);
  let finished = false;

  if (pageCount === readPage) {
    finished = true;
  }

  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const newBook = {
    id,
    name: String,
    year: Number,
    author: String,
    summary: String,
    publisher: String,
    pageCount: Number,
    readPage: Number,
    finished,
    reading: Boolean,
    insertedAt,
    updatedAt,
  };
  books.push(newBook);

  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  }

  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }

  const response = h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: id,
    },
  });
  response.code(201);
  return response;
};

const getAllBookHandler = () => ({
  status: 'success',
  data: {
    books,
  },
});

module.exports = {
  addBookHandler,
  getAllBookHandler,
};
