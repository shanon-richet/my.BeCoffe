import pg from 'pg';
import { user, host, database, database_url, password, port } from './credentials.mjs';
import DATA from './data.mjs';
import  {v4 as uuidv4} from 'uuid';

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
  const client = await pool.connect()
  const exists = await client.query('SELECT email FROM users WHERE email=$1', [email])
  /* if user does not already exist, row count === 0 */
  if(exists.rowCount === 0){
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

const getFullNameFromUserId = async (user_id) => {
  const client = await pool.connect()
  const user = await client.query('SELECT first_name, last_name FROM users WHERE id=$1', [user_id])
  const full_name = `${user.rows[0].first_name} ${user.rows[0].last_name}`;

  client.release();

  return (full_name);
}

export const addRecipeTalkToDB = async (user_id, date, recipe) => {
  const client = await pool.connect()
  const user = await client.query('SELECT first_name, last_name FROM users WHERE id=$1', [user_id])
  const full_name = `${user.rows[0].first_name} ${user.rows[0].last_name}`;

  const result = await client.query(
    'INSERT INTO dates (user_id, date, recipe, available) VALUES ($1, $2, $3, $4)',
    [user_id, date, recipe, false]
  )
  client.release();

  console.log(full_name, result)

  return (result);
}

export const editTalk = async (date, recipe) => {
  const client = await pool.connect()

  const edit = await client.query(
    'UPDATE dates SET recipe = $1 WHERE date = $2', [recipe, date]
  )
  client.release();

  return edit;
}

export const deleteTalk = async (date) => {
  const client = await pool.connect()

  const talk = await client.query(
      'DELETE FROM dates WHERE date = $1', [date]
  );
  client.release();

  return talk;
}

export const getAllTalks = async () => {
  const client = await pool.connect()
  const response = await client.query('SELECT first_name, last_name, date, recipe FROM dates LEFT JOIN users on dates.user_id = users.id')
  client.release();

  const talks = response.rows;
  const allTalks = [];
  for (const talk of talks) {
    const formattedDate = talk.date.toISOString().slice(0, 10);;

    const talkObj = {
      name: `${talk.first_name} ${talk.last_name}`,
      date: formattedDate,
      recipe: talk.recipe
    }
    allTalks.push(talkObj);
  }

  return (allTalks);
}

export const setupDB = async () => {
  for (const [first_name, last_name, email, password, learner] of DATA) {
    await newUser(first_name, last_name, email, password, learner)
  }

  return true
}