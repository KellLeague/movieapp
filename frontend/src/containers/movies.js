import React from 'react';

class Movies extends React.Component{
constructor(props){
    super(props)
    
    this.state = {
        movies:'',
        ratings:0,
        image:''
    }
    
}
        render(){
        return (
    <form >
        <input type='text'/>
    </form>
        )
   
    
  } 
}
export default Movies;