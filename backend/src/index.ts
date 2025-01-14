import express, { Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import { client } from '../db/conn';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  client
  console.log(` Server is running at http://localhost:${port}`);
});

