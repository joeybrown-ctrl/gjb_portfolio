const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('docs'));

app.get('/work', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs/work.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs/about.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs/contact.html'));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs/index.html'));
});

app.listen(PORT, () => console.log('Now listening'));
