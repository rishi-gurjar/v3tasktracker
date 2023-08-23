const serverless = require('serverless-http');
const app = require('../take'); // Updated

module.exports = serverless(app);