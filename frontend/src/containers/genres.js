import React from 'react'
import { Component } from 'react-router-dom';

class  Genres extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            genres:[],
            input:''
        }
    }


    handleInput = (e) => {
        this.setState ({input: e.target.value})
    } 

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        console.log(this.state);
const { genres } = this.state
    return(
        <form >
        <div className='container' >
            <div className='input-group mb-3' >
          <input type="text" onChange={this.handleInput} value={this.state.input} class="form-control" placeholder="Movie Genre" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
         <div className='input-group-append' >
                       <button class="btn btn-outline-secondary" type="button" onClick={this.handleSubmit} >Search by Genre</button>
         </div>
        </div>
           
        </div>
        <ol>
            {
                genres.map((e,i) => {
                    return <li> {e} </li>
                })
            }
        </ol>
       
    </form>
    )
    }
}
export default Genres;