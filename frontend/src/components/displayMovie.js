import React from 'react';

 const DisplayMovie = (props) => {
     return(
         <div className='col-6' style={{width:'20px', marginRight:'40px'}}  >
            <div className='row'>
         <img src={props.movies.img_url} alt='imagine an image' ></img>
         <h1>{props.movies.title}</h1>
         <h2>{props.movies.genre}</h2>
            </div>
         </div>  
     )
 }
 export default DisplayMovie;