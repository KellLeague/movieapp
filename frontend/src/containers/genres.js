import React from 'react'
import { Component } from 'react-router-dom';

class  Genres extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            genres:[]
        }
    }

    render(){
    return(
        <h1>Genres Page</h1>
    )
    }
}
export default Genres;