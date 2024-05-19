import axios from "axios";

const BASE_URL = "http://localhost:3001";

export async function fetchBooks() {
  const response = await axios.get(`${BASE_URL}/books`);

  if (response.data.status >= 400) {
    throw new Error(response.data.message);
  }

  return response.data.data.books;
}

export async function fetchBook(bookId) {
  const response = await axios.get(`${BASE_URL}/books/${bookId}`);

  if (response.data.status >= 400) {
    throw new Error(response.data.message);
  }

  return response.data.data.book;
}

export async function createNewBook(book) {
  const response = await axios.post(`${BASE_URL}/books`, book);

  if (response.data.status >= 400) {
    throw new Error(response.data.message);
  }

  return response.data.data.book;
}

export async function editBook(updatedBook) {
  const response = await axios.put(
    `${BASE_URL}/books/${updatedBook.id}`,
    updatedBook
  );

  if (response.data.status >= 400) {
    throw new Error(response.data.message);
  }

  return response.data.data.book;
}

export async function deleteBook(bookId) {
  const response = await axios.delete(`${BASE_URL}/books/${bookId}`);

  if (response.data.status >= 400) {
    throw new Error(response.data.message);
  }

  return response.data;
}
