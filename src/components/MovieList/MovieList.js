import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';


class MovieList extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the movieList from the API
        this.getMovies();
    }
    //create GET function to grab from server the movies
    getMovies() {
        this.props.dispatch({ type: 'GET_MOVIES' })
    }
    render() {
        return (
            <div>
                <MovieItem key={this.props.reduxState.movies.id} movies={this.props.reduxState.movies} getMovies={this.getMovies} />
            </div>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(MovieList);
