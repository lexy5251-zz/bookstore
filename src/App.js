import React, { useState } from 'react';
import BookList from './components/BookList';
import { data } from './data/data.js';

function App() {
  const [bookList, setBookList] = useState(data);

  return (
    <div>
      <BookList bookList={bookList}/>
    </div>
  );
}

export default App;
