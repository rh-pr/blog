import { Request, Response } from 'express';
import db from '../db/conn';
import logger from '../../utilits/logger';


export async function getBlogs (_: Request, res: Response) {
    try {
        const blogs_db = await db.queryConnect(`SELECT * FROM blog`);
        res.status(200).json(blogs_db.rows);
      } catch (e) {
        logger.error(`Database error:  ${JSON.stringify(e)}`);
        res.status(500).json({error: `Can not retrive blogs`});
      }
 }

