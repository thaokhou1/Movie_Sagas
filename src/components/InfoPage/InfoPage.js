import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'


class InfoPage extends Component {
  state = {
    movie: []
  }
  componentDidMount() {
    this.ID()
  }

  ID = () => {
    console.log(this.props.match.params.id)
    this.props.dispatch({ type: 'SET_INFO_MOVIE', payload: this.props.match.params.id })
  }

  handelClick = () => {
    this.props.history.push('/');
  }
  edit = () =>{
      this.props.history.push(`/edit/${this.props.match.params.id}`);
  }
  render() {
    return (
      <Router>
        <div>
          <h2>Info</h2>
          {/* <p>{JSON.stringify(this.props.reduxState.infoMovies)}</p> */}
          <button onClick={this.handelClick}>Back</button>
          <button onClick={this.edit}>Edit</button>
          {this.props.reduxState.infoMovies.map((thing) => {
            return (
              <div>
                <p>{thing.description}</p>
                Genre:
                <p>{thing.name}</p>
                
              </div>
            )
          })}
        </div>
      </Router>
    )
  }
}
const mapStateToProps = reduxState => ({
  reduxState,
});

export default withRouter(connect(mapStateToProps)(InfoPage));