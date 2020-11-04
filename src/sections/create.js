import React, { Component } from 'react';

class Create extends Component{
    render(){
        return (
            <form 
                onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(   
                        e.target.title.value,
                        e.target.desc.value
                    )    
                }.bind(this)}
            >
                <p><input type='text' name='title' placeholder='title'/></p>
                <p><textarea name='desc' placeholder='description'/></p>
                <p><input type='submit' value = 'submit'/>
                <input type='button' value='cancel'/>
                </p>
            </form>
        )
    }

}

export default Create;