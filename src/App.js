import React, {Component} from 'react';
import List from './sections/list'
import Contents from './sections/contents'
import Create from './sections/create'
import Update from './sections/update'
class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id=4;
    this.state ={
      mode: 'default',
      selected_id:0,
      contents:[
        {id:1, title: 'HTffML', desc: 'HTML is...'},
        {id:2, title: 'CSsadfS', desc: 'CSS is...'},
        {id:3, title: 'JavaScript', desc: 'JavaScript is...'},
        {id:4, title: 'React', desc: 'React is...'},
      ]
    }  
  }
  
  getOneContent(){
    var i = 0 ;
    while(i< this.state.contents.length){ 
      var data = this.state.contents[i];
      if(data.id === this.state.selected_id){
        return data;
      }
      i=i+1;
    }
  };

  bringContent(){
    var i = 0 ;
    while(i< this.state.contents.length){ 
      var data = this.state.contents[i];
      if(data.id === this.state.selected_id){
        return <Contents  title= {data.title} desc = {data.desc}/>
      } else if(this.state.selected_id === 0){
        return <Contents  title= 'React So difficult' desc = 'Dare not to try'/>
      }
    i=i+1;
    }
  }


  create(){
    if(this.state.mode === 'create'){
      return(
        <Create 
          changeMode = {function(){this.setState({mode:'default'})}
          .bind(this)}
          
          onSubmit = {function(_title, _desc){
            var _contents = Array.from(this.state.contents);
            this.max_content_id = this.max_content_id +1;
            _contents.push({
              id:this.max_content_id,
              title:_title,
              desc: _desc
            })
            this.setState({
              mode:'read',
              contents: _contents})  
          }.bind(this)}
        />
      )
    }
  }

  makeUpdateDelete(){
    if(this.state.mode==='read'){
      return (
        <div>
          <input 
            type='button' 
            value='update'
            onClick = {function(){
              this.setState({mode:'update'})
            }.bind(this)}
          />
          <input 
            type='button' 
            value='Delete'
            onClick = {function(){
              this.setState({mode:'delete'})
            }.bind(this)}
          />
        </div>  
      )
    }
  }

  delete(){
    if(this.state.mode === 'delete'){
      if(window.confirm('really?')){
        var _contents = Array.from(this.state.contents);
        _contents.splice(this.state.selected_id-1,1);
        this.setState({
          mode: 'welcome',
          contents: _contents,
          selected_id:0
        });
        alert('deleted!')
      }
    }
  }

  update(){
    if(this.state.mode === 'update'){
      return(
        <Update 
          data={this.getOneContent()}
          upLoad=
          {function(_id, _title, _desc){
            var _contents = Array.from(this.state.contents)
            var i = 0;
            while(i<_contents.length){
              if( _id === _contents[i].id){
                _contents[i] = {id:_id, title: _title, desc: _desc}
                break;
              }
            i=i+1;
            }
            this.setState(
              {contents: _contents,
              mode: 'read'}
            )
          }.bind(this)}
        />
      )
    }
  }



  render(){
    console.log('App render')
    return(
      <div>
        <h1><a 
          href = '/'
          onClick = {function(e){
            e.preventDefault();
            this.setState({mode:'default',selected_id: 0})
          }.bind(this)}>WEB</a>
        </h1>
        <p>Hello React</p>
        <List 
        contents = {this.state.contents}
        onChangePage = {function(id){
          this.setState({
            selected_id: Number(id),
            mode: 'read',
          });
        }.bind(this)}
        />
        <input 
            type='button' 
            value='create'
            onClick = {function(){
            this.setState({mode: 'create'})
          }.bind(this)}
          />
        {this.create()}
        {this.makeUpdateDelete()}
        {this.update()}
        {this.delete()}
        {this.bringContent()}
        
      </div>
    )
  }

}
export default App;