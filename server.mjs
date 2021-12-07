import express from "express";
import session from "express-session"
import cors from "cors";
import  {v4 as uuidv4} from 'uuid';

const PORT = 3000;
const app = express();
const oneDay = 1000 * 60 * 60 * 24;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.send('My app')
})

// Initiliaze the sessions
app.use(session({
    secret: uuidv4(),
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

// We tell our server to remain open, and listen to every incoming request
app.listen(PORT, () => console.log(`server started`));