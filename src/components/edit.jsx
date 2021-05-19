import React, { Component } from 'react';

class EditForm extends Component {
    state = { 

     }

    handleSubmit = () =>{

    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit()}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name"/>
                <label htmlFor="email">Email:</label>
                <input type="email" />
                <label htmlFor="phrase">Phrase:</label>
                <input type="text" />
                <input type="submit" value="Save"/>
            </form>
         );
    }
}
 
export default EditForm;