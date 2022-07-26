import express from 'express';
import { AppDataSource } from './data-source';
import { routes } from './routes';

export const app = express();

AppDataSource.initialize().then(() => {
  app.use(express.json());

  app.use(routes);

  return app.listen(process.env.PORT, () => console.log('Server is running!'));
})