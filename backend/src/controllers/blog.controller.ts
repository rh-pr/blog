import { Request, Response } from 'express';
import db from '../db/conn';
import logger from '../../utilits/logger';
import path from 'path';


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

export async function createPost(req: Request, res: Response) {
  try {
    const filePath = `/uploads/${req.file?.filename}`;
    const url = `${req.protocol}://${req.get('host')}${filePath}`;
    const date = (new Date()).toISOString().split('T')[0];

    const data = await db.queryConnect(
      `INSERT INTO blog (title, image,post, category, createdata) VALUES ($1,$2,$3,$4,$5) RETURNING id`,
       [req.body.title, url, req.body.post, req.body.category, date]);

    res.status(200).json({
      id: data.rows[0].id
    })
  } catch(e) {
    console.log(e)
  } 
}
