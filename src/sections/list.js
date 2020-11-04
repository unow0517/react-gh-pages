import React, { Component } from 'react';

class List extends Component{
    
    render(){
        var list=[];
        var i=0;
        var contents = this.props.contents;
        while(i<contents.length){
            list.push(<li key={contents[i].id}>
                <a 
                    href= 'whatever'
                    data-asd = {contents[i].id} //give data-asd to a tag!
                    onClick={function(event){
        //debugger; debug and check on the Web sources event.target.dataset.asd          
                        event.preventDefault();
                        this.props.onChangePage(event.target.dataset.asd);
                    }.bind(this)}
                >
                {contents[i].title}</a>
            </li>);
            i=i+1;
        }
        return(
            <ul>
                {list}
                
            </ul>
        )
    }
}
export default List;