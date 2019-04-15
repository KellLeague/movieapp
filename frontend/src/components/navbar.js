import React from 'react';
import { Link, HashRouter } from 'react-router-dom';
import { Component } from 'react'
import navbar from '../components/navbar.css'


class Navbar extends Component {

    render(){
        return(
            <HashRouter>
                <>
          <div className='headercontainer' >
          <div className='home' >
            <Link className='nav-link' to='/' >Home</Link>  
          </div>
          <div className='movies' >
          <Link className='nav-link' to='/movies' >All Movies</Link>
          <Link className='nav-link' to='/movies/byGenre' >By Genre</Link>
          <Link className='nav-link' to='/movies/:id'></Link>
          </div>

          
          
          </div>
                </>
            </HashRouter>
        )
    }
}
export default Navbar;