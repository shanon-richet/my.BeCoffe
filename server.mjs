import express from "express";
import sessions from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import  {v4 as uuidv4} from 'uuid';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { setupDB } from "./index.mjs";

const PORT = 3000;
const app = express();
const oneDay = 1000 * 60 * 60 * 24;
const __dirname = dirname(fileURLToPath(import.meta.url));

//username and password mocks
const myusername = 'tavormina.axel@gmail.com'
const mypassword = '1234'

let session;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initiliaze the sessions
app.use(sessions({
    secret: uuidv4(),
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

app.use(cookieParser())

// Login
app.get('/',(req,res) => {
    session = req.session;
    if(session.userid){
        res.sendFile(__dirname + '/views/dashboard.html');
    } else {
        res.sendFile(__dirname + '/views/index.html')
    }
});

// Logout
app.post('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

// User dashboard
app.post('/user',(req,res) => {
    if(req.body.username == myusername && req.body.password == mypassword){
        session = req.session;
        session.userid = req.body.username;
        res.sendFile(__dirname + '/views/dashboard.html');
    }
    else{
        res.send(`Invalid username or password`);
    }
})

// Get Database
// app.post('/setup', async (res) => {
//     console.log('here');
//     const database = await setupDB();
//     res.send(database);
// });

// We tell our server to remain open, and listen to every incoming request
app.listen(PORT, () => console.log(`server started`));