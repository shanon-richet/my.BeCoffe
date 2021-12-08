import pg from 'pg';
import {user, host, database, database_url, password, port } from './credentials.mjs';

const { Client } = pg
const client = new Client({
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
client.connect()

client.query('SELECT * FROM users', (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows)
  }
})