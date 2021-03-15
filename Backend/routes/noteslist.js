const express = require('express');
const {Note, validate} = require('../models/notes');
const router = express.Router();
// require auth 

router.get('/', async (req, res)=>{
    // call the database and get all genre 
    const notes =await Note.find();
    res.send(notes);
});
router.post('/',async (req,res)=>{
    // input validate 
    const {error} = validate(req.body);
    if(error) return res.status(400).send('input invalid..');
    
    console.log('post server called ')
    //post to the data base 
    let note = new Note({content: req.body.content});
    // save and return the response 
    note = await note.save();
    res.send(note._id);
});

router.put('/:id',async (req, res)=>{
    console.log("this is server req ",req.body)
    const note = await Note.updateOne({_id:req.params.id},{content: req.body.content})
    //const note = await Note.findByIdAndUpdate(req.params.id,{content: req.body.content},{new:true});
    if (!note) return res.status(404);
    res.send(note);
});

router.delete('/:id',async (req, res)=>{
    //const note =await  Note.deleteOne({_id:req.params.id})
    const note =await Note.findByIdAndRemove(req.params.id);
    if (!note) return res.status(404).send('Not found to delete');
    //res.send(note);
});

module.exports = router;