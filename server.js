const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello from Node.js 11!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});