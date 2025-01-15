import express, { Express, json, Request, Response} from 'express';
import { client } from '../db/conn';
import dotenv from 'dotenv';


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(json())


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.post('/blog', async (req: Request, res: Response) => {
  console.log(req.body);
  const dbres = await client.query('INSERT INTO blogs (title, image, post) VALUES ($1, $2, $3)',[
    req.body.title, req.body.image, req.body.post
  ]);

  
  // const dbres = await client.query('SELECT * FROM blogs');
  res.json({"message": "Added new blog", "blogId": dbres.rowCount});
  
});


app.listen(port, async () => {
  console.log(` Server is running at http://localhost:${port}`);
});

