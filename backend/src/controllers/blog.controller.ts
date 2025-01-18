import { Request, Response } from 'express';
import db from '../db/conn';
import logger from '../../utilits/logger';


export async function getPosts (_: Request, res: Response) {
    try {
        const blogs_db = await db.queryConnect(`SELECT * FROM blog`);
        res.status(200).json(blogs_db.rows);
      } catch (e) {
        logger.error(`Database error:  ${JSON.stringify(e)}`);
        res.status(500).json({error: `Can not retrive posts`});
      }
 }

 export async function getPostsByCategory (req: Request, res: Response) {
  console.log(req)
    try {
        const blogs_db = await db.queryConnect(`SELECT * FROM blog WHERE category = $1`, [req.body.category]);
        res.status(200).json(blogs_db.rows);
      } catch (e) {
        logger.error(`Database error:  ${JSON.stringify(e)}`);
        res.status(500).json({error: `Can not retrive posts`});
      }
 }

export async function getPostById (req: Request, res: Response) {
  try {
    const blogs_db = await db.queryConnect(`SELECT * FROM blog WHERE id = $1`, [req.params.id]);
    res.status(200).json(blogs_db.rows);
  } catch (e) {
    logger.error(`Database error:  ${JSON.stringify(e)}`);
    res.status(500).json({error: `Can not find post...`});
  }
}

