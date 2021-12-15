import { Router } from 'express';
import { 
    getAllTalks,
    addRecipeTalkToDB,
    editTalk,
    deleteTalk
} from '../index.mjs';

const router = Router();

// Must decide whether date comes from body or as a parameter

router
    .route('/')
    .get(async(req, res) => {
        const recipeTalks = await getAllTalks(req.session.userid);
        res.json(recipeTalks);
    })
    .post(async (req, res) => {
        const newRecipe = await addRecipeTalkToDB(req.session.userid, req.body.date, req.body.recipe);
        if (!newRecipe) {
            return res.status(403).send({error: 'Invalid fields'});
        }
        return res.send({info: 'Recipe has been added'});
    }) 

router
    .route('/:date')
    .delete(async (req, res) => {
        const deletedTalk = await deleteTalk(req.params.date);
        return res.send(deletedTalk);
    })
    .patch(async (req, res) => {
        const editedRecipeTalk = await editTalk(req.params.date, req.body.recipe);
        if (!editedRecipeTalk) {
            return res.status(403).send({error: 'Recipe topic must not be empty'});
        }
        return res.send({info: 'Recipe talk has been edited'});
    })

export default router;