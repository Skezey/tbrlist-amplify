/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBook = `mutation CreateBook(
  $input: CreateBookInput!
  $condition: ModelBookConditionInput
) {
  createBook(input: $input, condition: $condition) {
    id
    title
    author
  }
}
`;
export const updateBook = `mutation UpdateBook(
  $input: UpdateBookInput!
  $condition: ModelBookConditionInput
) {
  updateBook(input: $input, condition: $condition) {
    id
    title
    author
  }
}
`;
export const deleteBook = `mutation DeleteBook(
  $input: DeleteBookInput!
  $condition: ModelBookConditionInput
) {
  deleteBook(input: $input, condition: $condition) {
    id
    title
    author
  }
}
`;
