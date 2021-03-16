import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import {FaTrash} from 'react-icons/fa';
import Draggable from 'react-draggable';
// data flow 
// the component takes all the data from parent component through this props 
// and note property has attr .title , .content , .tags , .id
// inside card  dynamically render:
// div-->title div --> content span--> delete span-->edit div--> tags if there 
class NoteCard extends Component {
    //<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //<h5 class="card-title">{this.props.value}</h5>
   // <button className="btn-sm btn-success" >Edit</button> 
    chooseColor = ()=>{
        const colors=['danger','primary','info','secondary','success','warning'];
        let rand =[Math.floor(Math.random() * colors.length)]
        console.log(colors[rand])
        return colors[rand]
   };
   //+this.chooseColor()
   //<Draggable>  </Draggable>
    render() { 
        const id=this.props.id
        return (
            <Col xs={4} className="container" >
                <div className={"card text-white mb-3 bg-warning"} style={{maxWidth: 300}}>
                    <div className="card-body">
                        <input 
                        className="d-flex form-control card-title"
                        style={{backgroundColor:"transparent",
                                 borderColor:"transparent",maxWidth:200, display:"inline-block"}}
                        id={this.props.id} 
                        value={this.props.value} 
                        onChange={(e)=>{this.props.setEdit({newval: e.target.value,_id:id})}}
                        ></input>
                        <button 
                        className="btn-sm btn-danger ml-4" 
                        style={{display:"inline-block"}}
                        onClick={()=> this.props.onDelete(this.props.id) }><FaTrash/></button>     
                    </div>
                </div>
            </Col>
          );
    }
}
 
export default NoteCard;