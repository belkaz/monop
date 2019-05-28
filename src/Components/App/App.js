import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import Task from '../Task/Task';

class App extends Component {
  render() {
    return (
        <div className = 'App'>
          { this.props.curUser }
          <Task />
        </div>
    )
  }
}

let mapState = state => {
  return {
    curUser : state.curUser
  }
}

export default connect (mapState) (App);
