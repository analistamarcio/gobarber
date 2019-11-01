import express from 'express';
import path from 'path';
import routes from './routes';

import './database';

class App {
  constructor() {
    // this.server.get('/') or this.server.post('/') or this.server.delete('/')...
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
