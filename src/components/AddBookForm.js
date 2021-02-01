import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function AddBookForm({ addBook }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({
            name,
            price,
            category,
            imageUrl
        });
    };

    return (
        <div>
            <form
                autoComplete="off"
            >
                <TextField
                    id="name"
                    label="Name"
                    style={{ margin: 8 }}
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
                    style={{ margin: 8 }}
                    placeholder="Book Price"
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
                    style={{ margin: 8 }}
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
                    style={{ margin: 8 }}
                    placeholder="Default Url"
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
                <Button onClick={handleSubmit}>
                    Save
                </Button>
            </form>
        </div>
    );
};
