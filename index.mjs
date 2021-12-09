import pg from 'pg';
import { user, host, database, database_url, password, port } from './credentials.mjs';

const { Pool } = pg
const pool = new Pool({
  connectionString: database_url,
  ssl: {
    rejectUnauthorized: false
  },
  user: user, 
  host: host,
  database: database, 
  password: password, 
  port: port,
})

export const getUsername = async (email) => {
  const client = await pool.connect()
  const query = await client.query('SELECT email FROM users WHERE email=$1', [email])

  if(query.rowCount !== 0) {
    return query.rows[0].email
  } else {
    return false;
  }
}

export const getPassword = async (email) => {
  const client = await pool.connect()
  const query = await client.query('SELECT password FROM users WHERE email=$1', [email])

  if(query.rowCount !== 0) {
    return query.rows[0].password
  } else {
    return false;
  }
}