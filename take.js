const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use(express.static('public'));

let apiKey = '6cd8dea3d71bd02098090d1b8e0cb081';
let token = 'ATTAba67372b1bd203630a1176d60cabb2607a7990ba784151e467b341a5447023faE22124CE';
let boardId = '6499f8aa7ecd1d6854a8586c';

  
app.get('/data', (req, res) => {
    axios.get(`https://api.trello.com/1/boards/${boardId}/cards?key=${apiKey}&token=${token}`)
    .then(response => {
        let cards = response.data;
        let dataRows = cards.map(card => [card.name, card.idList, card.due || 'N/A']);
        console.log(dataRows);  // Prints the data to the console
        res.send(dataRows);  
    })
    .catch(error => {
        console.error(error);
        res.status(500).send('An error occurred');
    });
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
