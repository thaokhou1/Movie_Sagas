import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

class Movie extends Component {

  render() {
    return (
      
      <div>
          <p>hello from movie</p>
      </div>
 
    );
  }
}
const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect (mapStateToProps)(Movie);