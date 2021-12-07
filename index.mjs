import pg from 'pg'

const { Client } = pg
const client = new Client({
  user: 'hanna', // Your newly created user
  host: '172.17.0.2',
  database: 'becoffe', // Your newly created database
  password: 'pass', // Your newly created password
  port: 5432,
})
client.connect()