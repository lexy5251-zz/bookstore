import React from 'react';
import BookList from './components/BookList';
import { data } from './data/data.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { booksReducer } from './reducers/books';

function App() {
  const store = createStore(booksReducer, {books: data});

  return (
    <Provider store={store}>
        <BookList/>
    </Provider>
  );
}

export default App;
