export const booksReducer = (state = {}, action) => {
    switch(action.type) {
        case 'REMOVE_BOOK':
           state.books.splice(action.index, 1);
           return {...state, 
            books: [...state.books]
           };

        case 'ADD_BOOK':
            state.books.push(action.book);
            return {...state, 
                books: [...state.books]
            };
        
        case 'UPDATE_BOOK':
            state.books[action.index] = action.book;
            return {...state, 
                books: [...state.books]
            };

        default: 
        return state;
    }
}

