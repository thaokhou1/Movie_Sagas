import React, { Component } from 'react';
import { connect } from 'react-redux';





class MovieItem extends Component {
   

    // moreInfo = (id)=>{
    //     this.props.history.push(`/movie/${id}`)
    // }
    render() {
        return (
         <div>
            <img src={this.props.movies.poster}/>
            <p>{this.props.movies.title}</p>
            <p>{this.props.movies.description}</p>
         </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(MovieItem);