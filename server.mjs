import express from "express";
import sessions from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import  {v4 as uuidv4} from 'uuid';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { getUsername, getPassword, getIdFromUsername } from './index.mjs'
import recipeRoute from './routes/recipe.mjs';

const PORT = 3000;
const app = express();
const oneDay = 1000 * 60 * 60 * 24;
const __dirname = dirname(fileURLToPath(import.meta.url));

let session;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

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

// Dashboard
app.get('/dashboard',(req,res) => {
    if(req.session.userid){
        res.sendFile(__dirname + '/views/dashboard.html');
    } else {
        res.sendFile(__dirname + '/views/index.html')
    }
});

app.post('/dashboard', async(req,res) => {
    if(req.body.username == await getUsername(req.body.username) && req.body.password == await getPassword(req.body.username)){
        session = req.session;
        session.userid = await getIdFromUsername(req.body.username);
        res.sendFile(__dirname + '/views/dashboard.html');
    }
    else{
        res.sendFile(__dirname + '/views/login-failed.html');
    }
})

app.use('/dashboard/recipe', recipeRoute);

// We tell our server to remain open, and listen to every incoming request
app.listen(PORT, () => console.log(`server started`));