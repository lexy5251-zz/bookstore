import React, { useState } from 'react';
import SingleBook from './SingleBook';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditBookForm from './EditBookForm';
import Dialog from '@material-ui/core/Dialog';

export default function BookList({ bookList }) {
    const [books, setBooks] = useState(bookList);
    const [open, setOpen] = useState(false);
    const [editingBookIndex, setEditingBookIndex] = useState(-1);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSave = (book) => {
        if(editingBookIndex < 0) {
            books.push(book);
        } else {
            books[editingBookIndex] = book;
            setEditingBookIndex(-1);
        }
        setBooks(books);
        setOpen(false);
    };

    const removeBook = (index) => {
        books.splice(index, 1);
        setBooks([...books]);
    };

    const updateBook = (index) => {
        setOpen(true);
        setEditingBookIndex(index);
    };

    return (
        <div style={styles.container}>
            <Button
                variant="contained"
                color="primary"
                endIcon={<AddIcon />}
                onClick={handleClickOpen}
                style={styles.addButtonStyle}
            >
                Add
            </Button>
            <div style={styles.list}>
                {books.length > 0 && books.map((book, i) => {
                    return (
                        <SingleBook
                            key={i}
                            removeBook={removeBook}
                            updateBook={updateBook}
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
                <EditBookForm book={books[editingBookIndex]} onSave={onSave} />
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
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
    },

    addButtonStyle: {
        marginLeft: 10
    }

};