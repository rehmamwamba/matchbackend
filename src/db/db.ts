import { Pool } from 'pg';

const pool = new Pool({
  user: 'rml',
  host: 'localhost',
  database: 'rays',
  password: '123456',
  port: 5432,
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log('Connected to the database');
    return pool; 
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};

export default connectDB;
