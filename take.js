const express = require('express');
require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // To parse JSON request body
app.use(express.static('public'));

dotenv.config();

app.get('/api/env', (req, res) => {
  // Return environment variables as JSON
  res.json({
    apiKey: process.env.apiKey,
    token: process.env.token
  });
});

const apiKey = process.env.apiKey;
const token = process.env.token;
const boardId = process.env.boardId;
app.use(express.static('public'));

app.post('/submitTask', (req, res) => {
  const { newtask, date, labelValue, chooselist } = req.body;

  let labelIds = [];
  switch (labelValue) {
        case '2-5':
      labelIds.push('6499f8aa78ddeb58b0abff0a', '6499f8aa78ddeb58b0abff10');
      break;
    case '5-15':
      labelIds.push('6499f8aa78ddeb58b0abff10', '6499f8aa78ddeb58b0abff1d');
      break;
    case '15-30':
      labelIds.push('6499f8aa78ddeb58b0abff1d', '6499f8aa78ddeb58b0abff1a');
      break;
    case '30-60':
      labelIds.push('6499f8aa78ddeb58b0abff1a', '6499f8aa78ddeb58b0abff1f');
      break;
    case '1-2':
      labelIds.push('6499f8aa78ddeb58b0abff1f', '6499f8aa78ddeb58b0abff11');
      break;
  }

  let newList;
  switch(chooselist) {
    case 's-t':
      newList = '6499f8b900dc6627e5f97c61';
      break;
    case 'l-t':
      newList = '6499f8bcdaf6d3944e49ecaf';
      break;
    case 'cre':
      newList = '6499f8bfb3148d96e4d7b5fe';
      break;
    case 'ran':
      newList = '6499f98323b696430e611eae';
      break;
  }

  axios.post('https://api.trello.com/1/cards', {
    key: apiKey,
    token: token,
    idList: newList,
    name: newtask,
    due: date,
    idLabels: labelIds
  })
  .then(response => {
    console.log(response.data);
    res.json({ success: true }); // Modify this line
  })
  .catch(error => {
    console.error(error);
    res.status(500).send('An error occurred');
  });
});

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
  app.use(express.static('public'));
  module.exports = app;
  app.listen(port, () => console.log(`Server running at http://localhost:${port}`));