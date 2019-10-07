import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import { Paper, Grid} from '@material-ui/core';




class MovieItem extends Component {
   

    moreInfo = (id)=>{
        this.props.history.push(`/details/${id}`)
    }
    render() {
        return (
            <Router>
         <div>
         <Grid container justify="center" spacing={40}>
                    {this.props.reduxState.movies.map((movie) => {
                        return (
                            <Grid item md key={movie.id}>
                                <Paper>
                                    <p>{movie.title}</p>
                                    <img alt={movie.title} src={movie.poster} onClick={() => this.moreInfo(movie.id)} />
                                </Paper>
                            </Grid>
                        )
                    })}
            </Grid>
            </div>
         </Router>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(MovieItem));