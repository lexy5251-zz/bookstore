import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function EditBookForm({ onSave, book }) {
    let bName = "";
    let bPrice = "";
    let bCat = "";
    let bImageUrl = "";
    if (book) {
        bName = book.name;
        bPrice = book.price;
        bCat = book.category;
        bImageUrl = book.imageUrl;
    }
    
    const [name, setName] = useState(bName);
    const [price, setPrice] = useState(bPrice);
    const [category, setCategory] = useState(bCat);
    const [imageUrl, setImageUrl] = useState(bImageUrl);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            name,
            price,
            category,
            imageUrl
        });
    };

    return (
        <div>
            <form
                style={styles.formContainer}
            >
                <TextField
                    id="name"
                    label="Name"
                    placeholder="Book Name"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                    value={name}
                />
                <TextField
                    id="price"
                    label="Price"
                    placeholder="$"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => {
                        setPrice(event.target.value);
                    }}
                    value={price}
                />
                <TextField
                    id="category"
                    label="Category"
                    placeholder="Book Category"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => {
                        setCategory(event.target.value);
                    }}
                    value={category}
                />
                <TextField
                    id="image"
                    label="Image Url"
                    placeholder="/images/no-image.png"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => {
                        setImageUrl(event.target.value);
                    }}
                    value={imageUrl}
                />
                <Button 
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}>
                    Save
                </Button>
            </form>
        </div>
    );
};

const styles = {
    formContainer: {
        padding: 20,
        justifyContent: 'center'
    }
};