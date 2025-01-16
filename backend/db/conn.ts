import { Pool, QueryArrayConfig, QueryResult } from 'pg';
import config from '../config/default';
import logger from '../utilits/logger';

export const pool = new Pool({
    user: config.DATABASE.DB_USER,
    password: config.DATABASE.DB_PASSWORD,
    host: config.DATABASE.DB_HOST,
    port: config.DATABASE.DB_PORT,
    database: config.DATABASE.DB_NAME
});


const queryConnect = async (text: string, params?: any[]) => {
  try {
    const res = await pool.query(text, params);
    return res;
  } catch (e) {
    logger.error('Query error: ', e);
    throw e;
    
  }
}

const closePool = async () => {
  await pool.end();
}

export default {
  queryConnect,
  closePool,
}