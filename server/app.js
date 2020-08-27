require('./db/models');
const express = require('express'),
  path = require('path'),
  openRoutes = require('./routes/open'),
  secureUserRoutes = require('./routes/secure/users'),
  secureJournalRoutes = require('./routes/secure/journals'),
  passport = require('./middleware/authentication');

const app = express();

//Middleware
app.use(express.json());

// Unauthenticated routes
app.use(openRoutes);
//
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(
  passport.authenticate('jwt', {
    session: false
  })
);

// Secure User/Journal routes
app.use(secureUserRoutes);
app.use(secureJournalRoutes);

// Serve any static files

// Any authentication middleware and related routing would be here.

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
