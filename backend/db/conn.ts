import pg from 'pg';
const { Client } = pg;

export const client = new Client({
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'root',
    host: process.env.DTB_HOST || 'localhost',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    database: process.env.DB_NAME || 'blogdb',
});

(async () => {
  try {
    await client.connect();
    console.log('Database connecting')
  } catch (error) {
    console.error('Database error:', error);
  } finally {
    //  await client.end();
  }
})();

