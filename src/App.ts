import express, { Application } from 'express';
import { categoriesRoutes, specificationsRoutes } from './routes';

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.init();
  }

  private init(): void {
    this.middleware();
    this.routes();
  }

  private middleware() {
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/api/v1', categoriesRoutes);
    this.app.use('/api/v1', specificationsRoutes);
  }

  public get getApp(): Application {
    return this.app;
  }
}

export default App;
