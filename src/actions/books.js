export const removeBook = (index) => 
({
    type: 'REMOVE_BOOK',
    index
});

export const addBook = (book) => ({
    type: 'ADD_BOOK',
    book
})

export const updateBook = (book, index) => ({
    type: 'UPDATE_BOOK',
    book,
    index
})