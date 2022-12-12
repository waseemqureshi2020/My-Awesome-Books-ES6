// eslint-disable-next-line import/no-unresolved
import { addBookForm } from './HtmlElements.js';

// eslint-disable-next-line import/prefer-default-export
export const clearField = () => {
  addBookForm.bookTitle.value = '';
  addBookForm.bookAuthor.value = '';
};