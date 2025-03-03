const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello from Node.js 11!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});