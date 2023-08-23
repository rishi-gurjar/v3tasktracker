const serverless = require('serverless-http');
const app = require('../take.js'); // Ensure take.js exports your app

module.exports = serverless(app);