/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');

const port = parseInt(process.env.PORT, 10) || 3004;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(cookieParser());

  server.get('/login', (req, res) => {
    if (req.cookies.token) {
      res.redirect('/');
    }
    return app.render(req, res, '/login', req.query);
  });

  server.get('*', (req, res) => handle(req, res));
  server.use(handle);
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
