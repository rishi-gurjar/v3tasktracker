const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use(express.static('public'));

const apiKey1 = process.env.apiKey;
const token1 = process.env.token;
const boardId1 = process.env.boardId;

app.get('/data', (req, res) => {
    axios.get(`https://api.trello.com/1/boards/${boardId}/cards?key=${apiKey}&token=${token}`)
      .then(response => {
        let cards = response.data;
        let dataRows = cards.map(card => [card.name, card.idList, card.due, card.labels, card.id || 'N/A']);
        dataRows = dataRows.filter(row => row[1] != "6499fad78e3d1a3bbc6d35b2");
        
        dataRows = cards.map(card => {
            let labelNames = card.labels.map(label => label.name); // Get the name of each label
            return [card.name, card.idList, card.due, labelNames, card.id || 'N/A'];
        });
        
        dataRows.forEach(row => {
            if (row[1] === "6499f8b6309787a7edbb08fd") {
              row[1] = "today";
            }
            if (row[1] === "6499f8b900dc6627e5f97c61") {
                row[1] = "short-term";
              }
              if (row[1] === "6499f8bcdaf6d3944e49ecaf") {
                row[1] = "long-term";
              }
              if (row[1] === "6499f8bfb3148d96e4d7b5fe") {
                row[1] = "creative";
              }
              if (row[1] === "6499f98323b696430e611eae") {
                row[1] = "random";
              }
        });
        
        dataRows.forEach(row => {
            if (row[2] !== 'N/A') {
                const date = new Date(row[2]);
                const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
                row[2] = formattedDate;
            }
        });

        console.log("DATAROWS:", dataRows);  // Prints the data to the console
        res.send(dataRows);  
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('An error occurred');
      });
  });

  app.listen(port, () => console.log(`Server running at http://localhost:${port}`));