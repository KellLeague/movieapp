import React from 'react';
import { Component } from 'react-router-dom';
import axios from 'axios';

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
                this.setState ({
                    movies: res.data
                })
            })
    }

    render() {
        console.log('movies state:',this.state.movies)

        return (
            <form>
                <div className='container' >
                    <div className='input-group mb-3' >
                        <input type="text" class="form-control" placeholder="Movie Title" aria-label="Recipient's username" aria-describedby="basic-addon2" />
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

