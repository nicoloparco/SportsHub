// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
// const cors = require('cors');  // we don't need it anymore, because we use proxy server instead


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}
// DB Setup (connect mongoose and instance of mongodb)
mongoose.connect(process.env.MONGODB_URI || "mongodb://dennis_the14th:gracie1@ds163480.mlab.com:63480/heroku_v53xql53");

// App Setup (morgan and body-parser are middleware in Express)
app.use(morgan('combined'));  // middleware for logging
app.use(bodyParser.json({ type: '*/*' }));  // middleware for helping parse incoming HTTP requests
// app.use(cors());  // middleware for circumventing (规避) cors error

// Router Setup
router(app);

// Server Setup
const port = process.env.PORT || 3080;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);