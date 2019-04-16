import React from 'react';
import { Component } from 'react-router-dom';
import axios from 'axios';
import DisplayMovie from '../components/displayMovie';

class Movies extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/movies/')
            .then(res => {
                console.log('mounting', res.data)
                const copy = [...this.state.movies]
                    res.data.forEach((e)=>{
                        copy.push(e)
                    })
                this.setState({movies: copy})
            })
    }

    render() {
        console.log('movies state:',this.state.movies)
        const {movies} = this.state;
        if(!movies.length){
            return(
            <>
                <h1>waiting...</h1>
            </>
            )
        } else {
            return (
                <>
                <form>
                    <div className='container' >
                        <div className='input-group mb-3' >
                            <input type="text" className="form-control" placeholder="Movie Title" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className='input-group-append' >
                                <button className="btn btn-outline-secondary" type="button">Search by Title</button>
                            </div>
                        </div>
    
                    </div>
                
                    <div className='container row mx-auto' >
                        {
                            movies.map((e,i)=> {
                                return(
                                    <>
                                    <DisplayMovie key={i} movies={e}/>
                                    </>
                                )
                            })
                        }
                    </div>
                </form>
                </>
            );
    
        }
        

    }
}
export default Movies;

