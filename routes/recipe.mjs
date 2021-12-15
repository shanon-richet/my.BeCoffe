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
        const recipeTalks = await getAllTalks();
        res.json(recipeTalks);
    })
    .post(async (req, res) => {
        const newRecipe = await addRecipeTalkToDB(req.body.id, req.body.date, req.body.recipe);
        return res.send({info: 'Recipe has been added'});
    }) 
    // .patch(async (req, res) => {
    //     const editedRecipeTalk = await editTalk(req.body.date, req.body.recipe);
    //     res.json(editedRecipeTalk);
    // })

router
    .route('/:date')
    .delete(async (req, res) => {
        const deletedTalk = await deleteTalk(req.params.date);
        return res.send({info: 'Talk has been deleted'});
        // return res.status(500).send({error: 'Unable to delete talk'});
    })
    .patch(async (req, res) => {
        const editedRecipeTalk = await editTalk(req.params.date, req.body.recipe);
        if (deletedTalk)
            return res.send({info: 'Recipe talk has been edited'});
        return(error)
        // return res.status(400).send({error: 'Unable to edit recipe talk'});
    })
    // .post(async (req, res) => {
    //     const newRecipe = await addRecipeTalkToDB(req.body.id, req.params.date, req.body.recipe);
    //     res.send(newRecipe);
    // }) 

export default router;