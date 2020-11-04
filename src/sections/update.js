import React,{Component} from 'react';

class Update extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
        this.inputFormHandler = this.changeRecognizer.bind(this);
    }

    changeRecognizer(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        console.log('update render')
        return(
        <article>
                <form action ='' method='post'
                    onSubmit={function(e){
                    e.preventDefault();
                    this.props.upLoad(
                        this.state.id, 
                        this.state.title,
                        this.state.desc
                    )
                }.bind(this)}>
                <input type='hidden' name='id' value={this.state.id}/>
                <p><input 
                    type='text' 
                    name='title'
                    value={this.state.title}
                    onChange={this.inputFormHandler}  
                /></p>
                <p><textarea 
                    name='desc'
                    value={this.state.desc}
                    onChange={this.inputFormHandler}  
                /></p>
                <p><input 
                    type='submit' 
                    value = 'sUbmit'
                />
                <input type='button' value='cancel'/>
                </p>
            </form>
        </article>
        )
    }
}

export default Update;