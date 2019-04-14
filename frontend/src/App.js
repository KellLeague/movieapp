import React, { Component } from 'react';
import Navbar from './components/navbar';
import Home from './containers/home';
import { HashRouter, Route} from 'react-router-dom';
import Movies from './containers/movies';
import Genres from './containers/genres';



class App extends Component {
  render() {
    return (
       <HashRouter>
      <>
      <Navbar/>
      <Route path='/' exact component={Home}/>
      <Route path='/movies' exact component={Movies}/>
      <Route path='/movies/byGenre' exact component={Genres}/>
      </>
      </HashRouter>
    );
  }
}

export default App;
