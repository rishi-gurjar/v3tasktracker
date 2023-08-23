require('dotenv').config();

const apiKey = process.env.apiKey;
const token = process.env.token;
const boardId = process.env.boardId;



// Assuming the form has an id of "taskForm"
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Capture form data
    const newtask = document.getElementById('newtask').value;
    const date = document.getElementById('date').value;
    const labelValue = document.getElementById('label').value;
  
    // Map label value to Trello label ID
    let labelId;
    switch (labelValue) {
      case '2':
        labelId = '6499f8aa78ddeb58b0abff10';
        break;
      case '10':
        labelId = '6499f8aa78ddeb58b0abff1d';
        break;
      case '15':
        labelId = '6499f8aa78ddeb58b0abff0a';
        break;
    }
  
    // Make API call to Trello
    fetch('https://api.trello.com/1/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key: apiKey,
        token: token,
        idList: boardId,
        name: newtask,
        due: date,
        idLabels: labelId
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle success, e.g., show a success message
    })
    .catch(error => {
      console.error(error);
      // Handle error, e.g., show an error message
    });
  });
  