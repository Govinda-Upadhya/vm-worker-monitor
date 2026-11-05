import express, {
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import { db } from './prisma/db';

const app = express();
app.use(express.json());

app.post('/api/metrics', async (req: Request, res: Response) => {
  const metrics = req.body;
  console.log('Received metrics:', metrics);
  res.json({ received: true });
});

app.listen('3000', () => {
  console.log('lsitenign on port 3000');
});
