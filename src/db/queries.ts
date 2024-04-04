import { Pool } from 'pg';

const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'database',
  password: 'password',
  port: 5432,
});

const getUsers = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users');
    client.release();
    return result.rows;
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
  }
};

export default getUsers;
