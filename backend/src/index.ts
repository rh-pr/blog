import express, { Express, json, Request, Response} from 'express';
import db from '../db/conn';
import dotenv from 'dotenv';
import multer from 'multer';
import logger from '../utilits/logger';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const storage = multer.diskStorage({
  destination: function (_req: Request, _file: Express.Multer.File, cb) {
    cb(null, 'uploads')
  },
  filename: function (_req:Request, file: Express.Multer.File, cb) {
    cb(null, `${Date.now() }.${file.originalname}` )
  }
})

const upload = multer({ storage: storage })


app.use(json())


app.get('/blogs', async (_: Request, res: Response) => {
  try {
    const blogs_db = await db.queryConnect(`SELECT * FROM blog`);
    res.status(200).json(blogs_db.rows);
  } catch (e) {
    logger.error(`Database error:  ${JSON.stringify(e)}`);
    res.status(500).json({error: `Can not retrive blogs`});
  }
});



// app.post('/blog', async (req: Request, res: Response) => {
//   // const dbres = await client.query(
//   //   'INSERT INTO blog (title, image, post) VALUES ($1, $2, $3)',[
//   //   req.body.title, req.body.image, req.body.post
//   // ]);

//   // res.json({"message": "Added new blog", "blogId": dbres.rowCount});

// });

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

