import React, { Component } from 'react';
import Navbar from './components/navbar';
import Home from './containers/home';
import { HashRouter, Route} from 'react-router-dom';
import Movies from './containers/movies';



class App extends Component {
  render() {
    return (
       <HashRouter>
      <>
      <Navbar/>
      <Route path='/' exact component={Home}/>
      <Route path='/movies' exact component={Movies}/>
      </>
      </HashRouter>
    );
  }
}

export default App;
