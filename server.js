const express = require('express');
const fetch = require('node-fetch');

const app = express();

const token = "YOUR_TOKEN_HERE";

const PORT = process.env.PORT || 3001;

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const response = await fetch(`https://trefle.io/api/v1/plants?token=${token}`);
    const data = await response.json();
    console.log(data);
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});