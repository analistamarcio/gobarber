import express from 'express';
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
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
