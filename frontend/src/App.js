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
     
      </>
      </HashRouter>
    );
  }
}

export default App;
