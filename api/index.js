const serverless = require('serverless-http');
const app = require('../take.js');

module.exports = serverless(app);
