import React, { Component } from 'react';


class NewNote extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </React.Fragment>
         );
    }
}
 
export default NewNote;