import express, { Application } from 'express';
import userRoutes from './routes/userRoutes';

const app: Application = express();

app.use(express.json());
app.use('/users', userRoutes);
app.get('/status', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;
