import express from 'express';
import mongoose from 'mongoose';
import { env } from './configs/env';
import { logger } from './middlewares/logger';
import { router } from './routes';

export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.appSettings();
    this.connectDb();
    this.initializeMiddleWares();
    this.addRoutes();
  }

  public listen() {
    this.app.listen(env.serverPort, () => {
      console.log(`Server running on port ${env.serverPort}`);
    });
  }

  private appSettings() {
    this.app.set('trust proxy', true);
  }

  private initializeMiddleWares() {
    this.app.use(express.json());
    this.app.use(logger);
  }

  private addRoutes() {
    this.app.use(router);
  }

  private connectDb() {
    if (env.mongoDb.mongoDebug) {
      mongoose.set('debug', true);
    }
    mongoose.connect(`${env.mongoDb.url}`);
  }
}
