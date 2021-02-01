import React, { useState } from 'react';
import SingleBook from './SingleBook';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddBookForm from './AddBookForm';
import Dialog from '@material-ui/core/Dialog';

export default function BookList({ bookList }) {
    const [books, setBooks] = useState(bookList);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addBook = (book) => {
        books.push(book);
        setBooks(books);
        setOpen(false);
    };

    const removeBook = (index) => {
        books.splice(index, 1);
        setBooks([...books]);
    };

    return (
        <div style={styles.container}>
            <Button
                variant="contained"
                color="primary"
                endIcon={<AddIcon />}
                onClick={handleClickOpen}
            >
                Add
            </Button>
            <div style={styles.list}>
                {books.map((book, i) => {
                    return (
                        <SingleBook
                            key={i}
                            removeBook={removeBook}
                            index={i}
                            name={book.name}
                            price={book.price}
                            category={book.category}
                            imageUrl={book.imageUrl}
                        />
                    )
                }
                )}
            </div>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <AddBookForm addBook={addBook} />
            </Dialog>
        </div>
    );
};

const styles = {
    container: {
        margin: 40,
        padding: 10,
    },

    list: {
        display: 'flex',
        flexDirection: 'row',
    }
};