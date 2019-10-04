import React, { Component } from 'react';
import './App.css';
import Movie from '../Movie/Movie';
import {HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

//import componenets for routes
import InfoPage from '../InfoPage/InfoPage';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
     
       <Route path='/' exact component={Movie}/>
       <Route path='/movie/:id' render={({match})=><InfoPage match={match}/>}/>
       <Route path='/edit/:id' render={({match})=><Edit match={match}/>}/>
      </div>
      </Router>
    );
  }
}
const mapStateToProps = reduxState => ({
  reduxState,
});
 
export default connect(mapStateToProps)(App);
