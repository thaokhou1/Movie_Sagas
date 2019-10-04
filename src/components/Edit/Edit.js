import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

class Edit extends Component {

  render() {
    return (
      
      <div>
          <p>hello from edit</p>
      </div>
 
    );
  }
}
const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(Edit));
