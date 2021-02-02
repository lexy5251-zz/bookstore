import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

export default function SingleBook({ name, price, category, imageUrl, removeBook, index, updateBook }) {
  return (
    <Card style={styles.container}>
      <div>
        <img
          style={styles.media}
          src={imageUrl}
        />
        <div style={styles.content}>Name: <strong>{name}</strong></div>
        <div style={styles.content}>Price: ${price}</div>
        <div style={styles.content}>Category: {category}</div>
        <div style={styles.buttonsContainer}>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={() => updateBook(index)}
          >
            Update
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => removeBook(index)}
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
    margin: 10,
    padding: 10,
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