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
        res.send(newRecipe);
    }) 
    .patch(async (req, res) => {
        const editedRecipeTalk = await editTalk(req.body.date, req.body.recipe);
        res.send(editedRecipeTalk);
    })
    .delete(async (req, res) => {
        const deletedTalk = await deleteTalk(req.body.date);
        res.send(deletedTalk);
    })

// router
//     .route('/:date')
//     .post(async (req, res) => {
//         const newRecipe = await addRecipeTalkToDB(req.body.id, req.params.date, req.body.recipe);
//         res.send(newRecipe);
//     }) 
//     .patch(async (req, res) => {
//         const editedRecipeTalk = await editTalk(req.params.date, req.body.recipe);
//         res.send(editedRecipeTalk);
//     })

export default router;