const express = require('express');
const Trello = require("trello");
const app = express();
const port = 3000;

let apiKey = '6cd8dea3d71bd02098090d1b8e0cb081';
let token = 'ATTAba67372b1bd203630a1176d60cabb2607a7990ba784151e467b341a5447023faE22124CE';
let boardId = '6499f8aa7ecd1d6854a8586c';
let isClicked = false; // Declare isClicked here

const trello = new Trello(apiKey, token);


app.get('/data', (req, res) => {
    trello.getCardsOnBoard(boardId)
      .then(cards => {
        let dataRows = cards.map(card => [card.name, card.idList, card.due || 'N/A']);
        res.send(dataRows);  // Send the data to the client
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('An error occurred');
      });
  });
  
  app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
  console.log(dataRows); // PRINT

    /* 
trello.getCardsOnBoard(boardId)
  .then(cards => {
    let dataRows = cards.map(card => [card.name, card.idList, card.due || 'N/A']);
    console.log(dataRows); // PRINT
    // Now you have your data, you could send this to your front-end code
    // Or use it to generate HTML on server-side
  })
  .catch(error => console.error(error));


  google.charts.load('current', {'packages':['table']});
  google.charts.setOnLoadCallback(drawTable);

  function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('string', 'List');
    data.addColumn('string', 'Due Date');
    data.addRows(dataRows); // replace with your actual data from the server

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
  }
*/

document.getElementById("view-tasks").addEventListener("click", function() {
    if (!isClicked) {
        isClicked = true;
        boonk();
    } else {
        document.getElementById("cards").textContent = "";
        isClicked = false;
    }
});

function boonk() {
    fetch(`https://api.trello.com/1/boards/${boardId}/cards?key=${apiKey}&token=${token}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(cards => {
            let cardsDiv = document.getElementById('cards');
            cards.forEach(card => {
                let cardElement = document.createElement('h3');
                cardElement.textContent = card.name;
                cardsDiv.appendChild(cardElement);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



let isClicked1 = false; // Declare isClicked here

document.getElementById("view-tasks-today").addEventListener("click", function() {
    if (!isClicked1) {
        isClicked1 = true;
        boonk_today();
    } else {
        document.getElementById("cards2").textContent = "";
        isClicked1 = false;
    }
});

function boonk_today() {
    fetch(`https://api.trello.com/1/boards/${boardId}/cards?key=${apiKey}&token=${token}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(cards => {
            let cardsDiv = document.getElementById('cards2');
            cards.forEach(card => {
                if (card.idList === '6499f8b6309787a7edbb08fd') { // Replace 'YOUR_TODAY_LIST_ID' with the actual ID of the "today" list
                    let cardElement = document.createElement('h3');
                    cardElement.textContent = card.name;
                    cardsDiv.appendChild(cardElement);
                }
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });

}
