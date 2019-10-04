import React, { Component } from 'react';
import MovieList from '../MovieList/MovieList';

class Movie extends Component {

  render() {
    return (
      
      <div>
          <h2>Movie List</h2>
          <MovieList/>
      </div>
 
    );
  }
}

export default Movie;