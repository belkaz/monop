import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import Task from '../Task/Task';

class App extends Component {
  genTasks = () => {
    let xx = [];
    let tops = [ 50, 350, 650, 950];
    let lefs = [ 50, 300, 550, 800, 1050, 1300, 1550];
    let i = 0;
    let j = 0;    
    this.props.tasks.forEach( (element ,k) => {
      if ( element.ACTIVE === '+' ) {
      xx.push(
        <Task
            id = { 'Task' + i + '_' + j }             
            ll = { lefs [i] }
            tt = { tops [j] }
            st = { this.props.tasks[ k ]}/>
      ); 
       i += 1;          
      if ( i === 7 )  { j += 1; i = 0; }
    }
  });
    return xx;
  }
  render() {
    return (
        <div className = 'App'>
          { this.genTasks() }          
        </div>
    )
  }
}

let mapState = state => {
  return {
    curUser : state.curUser,
    tasks : state.tasks
  }
}

export default connect (mapState) (App);
