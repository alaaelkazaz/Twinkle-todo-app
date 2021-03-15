const mongoose = require('mongoose');
const Joi = require('joi');

// validate the schema 

function validateNote(note){
    //console.log('validate at notes model is working fine')
    const schema = {
        content: Joi.string().min(2).required()
    };
     return Joi.validate(note,schema);
};
// define the schema 
const notesSchema = mongoose.Schema({
    content:{
        type: String,
        minLength:2,
        required: true
    }
});
// utilize the schema making a mongoose model 
const Note = mongoose.model('Note', notesSchema);
module.exports.Note = Note ;
module.exports.validate = validateNote;