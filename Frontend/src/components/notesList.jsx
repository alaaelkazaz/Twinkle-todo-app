import React, { Component } from 'react';
import NoteCard from './noteCard';
import { Container } from 'react-bootstrap';
import FlipMove from 'react-flip-move';
class NoteList extends Component {
    
     // componentWillMount --> get the notes list from the props passed to the comp 
     // from the parent componenent  
    // <FlipMove duration={500} easing="ease-in-out" > // for animation 
  
    render() { 
        const { length : count } = this.props.notes;
        if( count === 0) return ( 
            <h1 className="text-center">You have got no notes to display. </h1>
        )

        return (
           <React.Fragment>
               <h1 className="text-center mt-3 mb-3">You have got {count} notes. </h1>
               <Container className="row flexRow">
               { this.props.notes.map(note =>( 
               <NoteCard 
               className="colXs3"
               key={note._id}
               value ={note.content}
               onDelete={()=>this.props.onDelete(note._id)}
               id={note._id}
               setEdit={this.props.setEdit}
               />
               ))};
              
               </Container>
           </React.Fragment>
          );
    }
}
 
export default NoteList;