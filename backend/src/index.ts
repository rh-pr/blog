import express, { Express, json, Request, Response} from 'express';
import { client } from '../db/conn';
import dotenv from 'dotenv';
import multer from 'multer';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const upload = multer({ dest: 'uploads/' })


app.use(json())


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.post('/blog', async (req: Request, res: Response) => {
  const dbres = await client.query(
    'INSERT INTO blogs (title, image, post) VALUES ($1, $2, $3)',[
    req.body.title, req.body.image, req.body.post
  ]);

  res.json({"message": "Added new blog", "blogId": dbres.rowCount});
  client.end();
});

app.post('/blogimage', upload.single('file'), function (req:Request, res:Response, next) {
  try {
    res.send(req.file)
  } catch(e) {
    console.log(e)
  }
})


app.listen(port, async () => {
  console.log(` Server is running at http://localhost:${port}`);
});

