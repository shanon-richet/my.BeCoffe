import pg from 'pg';
import { user, host, database, database_url, password, port } from './credentials.mjs';
import DATA from './data.mjs';

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

export const newUser = async (first_name, last_name, email, password, learner) => {
  console.log(first_name, last_name, email, password, learner);
  const client = await pool.connect()
  const exists = await client.query('SELECT email FROM users WHERE email=$1', [email])
  console.log(exists.rowCount)

  /* if user does not already exist, row count === 0 */
  if(exists.rowCount === 0){
    console.log(`Begin... ${first_name} ${last_name} is a ${learner ? 'learner' : 'coach'}`)
    await client.query(
      'INSERT INTO users (first_name, last_name, email, password, learner) VALUES ($1, $2, $3, $4, $5)',
      [first_name, last_name, email, password, learner]
    )
    client.release()
    return true
  }
  
  client.release()
  return false
}

export const setupDB = async () => {
  for (const [first_name, last_name, email, password, learner] of DATA) {
    await newUser(first_name, last_name, email, password, learner)
  }

  return true
}