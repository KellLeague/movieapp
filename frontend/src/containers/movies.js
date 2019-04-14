import React from 'react';
import { Component } from 'react-router-dom';

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
        <div className='container' >
            <div className='input-group mb-3' >
          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
         <div className='input-group-append' >
                       <button class="btn btn-outline-secondary" type="button">Search by Title</button>
         </div>
        </div>
           
        </div>
       
    </form>
        )
   
    
  } 
}
export default Movies;

