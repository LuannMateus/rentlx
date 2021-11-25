import 'reflect-metadata';
import http from 'http';
import App from './App';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import './database';

import './shared/container';

const app = new App().getApp;

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
