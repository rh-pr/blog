import pg from 'pg';
const { Client } = pg;

export const client = new Client({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: 'blogdb',
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

