import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class Edit extends Component {

  state = {
    movie: {
      id: '',
      title: '',
      description: ''
    }
  }
  componentDidMount() {
    this.movieInfo();
  }
  movieInfo = () => {
    {
      this.props.reduxState.infoMovies.map((movieInfo) => {
        this.setState({
          movie: {
            title: movieInfo.title,
            description: movieInfo.description,
            id: movieInfo.id
          }
        })
        console.log('movieInfo', movieInfo);
      })
    }
  }
  handleChange = (event, propertyName) => {
    this.setState({
      movie: {
        ...this.state.movie,
        [propertyName]: event.target.value,
      }
    })
    console.log(this.state.movie)
  }
  handleSubmit = () => {
    this.props.dispatch({ type: 'UPDATE_MOVIES', payload: this.state.movie })
    this.props.history.push(`/details/${this.props.match.params.id}`)
    console.log('In submit');
  }
  handleCancel = () =>{
    this.props.history.push(`/details/${this.props.match.params.id}`)
  }

  render() {
    return (
      <Router>
        <div>
          <p>Title:</p>
          <textarea rows='10' col='90' onChange={(event) => this.handleChange(event, 'title')} value={this.state.movie.title}></textarea>
          <br />
          <p>Description:</p>
          <textarea rows='10' col='90' onChange={(event) => this.handleChange(event, 'description')} value={this.state.movie.description}></textarea>
          <br />

          <button onClick={this.handleSubmit}>Submit Changes</button>
          <button onClick={this.handleCancel}>Cancel Changes</button>
        </div>
      </Router>
    )
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default withRouter(connect(mapStateToProps)(Edit));
