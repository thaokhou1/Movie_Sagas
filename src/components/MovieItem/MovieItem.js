import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import {withRouter} from 'react-router';




class MovieItem extends Component {
   

    moreInfo = (id)=>{
        this.props.history.push(`/movie/${id}`)
    }
    render() {
        return (
            <Router>
         <div>
            <img onClick={() => this.moreInfo(this.props.movies.id)} src={this.props.movies.poster} />
            <p>{this.props.movies.title}</p>
            <p>{this.props.movies.description}</p>
           <p>{this.props.movies.name}</p>
         </div>
         </Router>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(MovieItem));