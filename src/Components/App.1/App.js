import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import AAddTask from './AAddTask';

import Task from '../Task/Task';

class App extends Component {    
  genTasks = () => {
    let xx = [];
    let tops = [ 50, 350, 650, 950];
    let lefs = [ 50, 300, 550, 800, 1050, 1300, 1550];
    let i = 0;
    let j = 0;     
    this.props.tasks.forEach( element  => {
      if ( element.ACTIVE === '+' ) {
      xx.push(
        <Task
            id = { element.ID }  
            key = { i + '_' + j }           
            ll = { lefs[i] }
            tt = { tops[j] }
            st = { element }/>
      ); 
       i += 1;          
      if ( i === 7 )  { j += 1; i = 0; }
    }
  });
    return xx;
  };
  clickHandler = ( f ) => {
    this.props.tryAddTask ( {
      'ACTIVE' : '+',
      'ID' : ' ' + this.props.tasks.length + 1,
      'INFO' : 'DIE',
      'WHO' : 'HITLER',
      'WHEN' : '1945',
      'WHERE' : 'BERLIN',
      'REASON' : 'BULLET&FIRE'
    })
  };
  render() {
    return (
        <div className = 'App'>
          { this.props.curUser }
          { this.genTasks() }      
          <button 
            className = 'AppAddTask'
            onClick = { this.clickHandler }></button>             
        </div>
    )
  }
}

let mapState = state => {
  return {
    magic : state.curUser,
    tasks : state.tasks
  }
}
let mapAction = dispatch => {
    return {
      tryAddTask : dat => dispatch ( AAddTask (dat) )
    }
}

export default connect ( mapState, mapAction ) (App);
