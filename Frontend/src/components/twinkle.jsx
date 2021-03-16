import React, { Component } from 'react';
import NoteList from './notesList';
import http from '../services/httpservice';
import { getNotes , deleteNote, saveNote , updateNote } from '../services/notesServiece';
class Twinkle extends Component {
    state = { 
        notes:[],
        currentItem:{
            _id:'',
            content:''
        }
     }

    async componentDidMount(){
        // supose to return an array 
        let {data}=  await getNotes();
        const notes =[...data]
        this.setState({notes:notes})
    };

    handleinput = (e) =>{
        this.setState({currentItem:{content:e.target.value, _id: Date.now()}})
    };
    handleEdit = async(e)=>{
        let item = this.state.notes.filter(item => item._id === e._id);
        item.content = e.newval;
        //console.log(item.content);
        let notes = this.state.notes;
        notes.filter(note =>{
            if (note._id === e._id){
                note.content= item.content
            }
        })
        this.setState({notes});
        // call the server to save the update 
        await updateNote(item)
    };
    handleDelete =async (noteId) =>{
        // optemistic approch for deletion 
        // UI Deletion 
        const prevStateNotes = this.state.notes
        const notes = this.state.notes.filter(note => note._id !== noteId);
        this.setState({notes: notes});
        try {           
         await deleteNote(noteId)
            
        } catch (error) {
            if ( error && error.response === 404)
            console.log("this note already deleted ") 
            this.setState({notes: prevStateNotes})
        }
     };
     // call the server and save the new updata to it u\
    handleSaveNote =async(e) =>{
        // to prevent the relod on submit hit 
        e.preventDefault();
        const prevstate= this.state.notes
        let newitem= this.state.currentItem;
        try {
            const {data} = await saveNote(newitem)
            console.log(data)            // set the id 
            newitem._id =`${data}`
            const cpstate= [...this.state.notes,newitem];
            this.setState({notes:cpstate,currentItem:{_id:'',content:''}});

        } catch (error) {
            if( error && error.response === 404) console.log('error in sumbaiton of the note ')
            this.state({notes : prevstate})
        } 
    };
    //style={{backgroundColor:"rgba(0,0,0,.3)"}}
    render() { 
        return (
            <React.Fragment>
                <div className="container mt-5 ">
                    <form className="input-group"
                     onSubmit={this.handleSaveNote}>
                        <input onChange={this.handleinput} className="form-control" type="text" placeholder="Add a todo ..." value={this.state.currentItem.content}></input>
                        <button  className="btn btn-sm btn-success" type="submit">Add</button>
                    </form>
                    <NoteList 
                    notes={this.state.notes} 
                    onDelete={this.handleDelete} 
                    setEdit={this.handleEdit} />
                </div>

            </React.Fragment>
          );
    }
}
 
export default Twinkle;