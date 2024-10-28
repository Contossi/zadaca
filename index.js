const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
});
app.get('/users', (req, res) => {
    const users = [
        { id: 1, ime: 'Marko', prezime: 'Kontosic' },
        { id: 2, ime: 'Davor', prezime: 'Kostic' },
        { id: 3, ime: 'Marija', prezime: 'Budic' }
    ];
    res.json(users);
});
app.listen(PORT, (error) => {
    if (error) {
    console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
    } else {
    console.log(`Server je pokrenut na http://localhost:${PORT}`);
    }
    });