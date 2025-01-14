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
    
    const res = await client.query('SELECT $1::text as message', ['Hello world!']);
    console.log(res.rows[0].message); // Output: Hello world!
  } catch (error) {
    console.error('Database error:', error);
  } finally {
    await client.end();
  }
})();

