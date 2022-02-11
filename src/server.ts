import express from 'express';
import dotenv from 'dotenv';
import indexRouter from './routes';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', indexRouter);

// swagger
app.get('/', (req, res) => {
  res.redirect('/swagger');
});
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
