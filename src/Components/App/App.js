import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Task from '../Task/Task';

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Task 
          data = {this.props.tasks[0]}
          ll = '50'
          tt = '50' />
      </div>
    )
  }
}

let mapS = state => {
  return {
    tasks : state.tasks
  }
}

export default connect(mapS) (App);
