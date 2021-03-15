const { Note } = require("./models/notes");
const { User } = require("./models/user");
const mongoose = require("mongoose");
const config = require("config");
// populating the database 
const data = [{
    content:"first seed note "
    },{
    content:"second seed note "
    },{
    content:"third seed note "
    }
];

const user = {name:"alaa","email":"leoelkzaz@yahoo.com",password:"12345"}
async function seed() {
    await mongoose.connect(config.get("db"));
  
    await Note.deleteMany({});
  
    for (let note of data) {
      const { _id: noteId } = await new Note({ content: note.content }).save();
      const note= {_id:note.noteId, content:note.content};
      await Note.insertMany(note);
    }
    
    await User.deleteMany({});
    const { _id: userId} = await new User({name:user.name,email:user.email,password:user.password}).save();
    const user1 = {_id:user.userId, name:user.name,email:user.email,password:user.password};
    await User.insertMany(user1);
    mongoose.disconnect();
  
    console.info("Done!");
  }
  
seed();
  