import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/404/PageNotFound';
import Footer from './components/Footer/Footer';
import './App.scss';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='Container'>
          <Switch>
            <Route path='/'exact component={Home} />
            <Route path='/movie/:imdbID' component={MovieDetails} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
