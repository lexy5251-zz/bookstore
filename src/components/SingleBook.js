import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { removeBook } from '../actions/books';

export default function SingleBook({ name, price, category, imageUrl, index, onUpdateClicked }) {
  const dispatch = useDispatch()

  return (
    <Card style={styles.container}>
      <div>
        <img
          style={styles.media}
          src={imageUrl}
        />
      </div>
      <div>
        <div style={styles.content}><strong>{name}</strong></div>
        <div style={styles.content}>${price}</div>
        <div style={styles.content}>{category}</div>
        <div style={styles.buttonsContainer}>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={() => onUpdateClicked(index)}
          >
            Update
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => dispatch(removeBook(index))}
          >
            Delete
            </Button>
        </div>
      </div>
    </Card>
  );
};

const styles = {
  container: {
    minHeight: 400,
    margin: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  media: {
    maxWidth: '100%',
  },

  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  content: {
    marginTop: 10
  }

};