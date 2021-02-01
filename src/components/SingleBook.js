import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

export default function SingleBook ({ name, price, category, imageUrl, removeBook, index }) {
  return (
    <Card style={styles.container}>
        <div>
            <img
            style={styles.media}
            src={imageUrl}
            />
            <div>Name: {name}</div>
            <div>Price: {price}</div>
            <div>Category: {category}</div>
            <Button 
              size="small" 
              variant="outlined" 
              color="secondary"
              onClick={() => removeBook(index)}
            >
              Delete
            </Button>
        </div>
    </Card>
  );
};

const styles = {
  container: {
      margin: 20,
      padding: 10,
  },

  media: {
    maxWidth: '100%',
  }
};