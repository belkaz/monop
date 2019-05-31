import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Task from '../Task/Task';

import AAddTask from './AAddTask';

class App extends Component {
  constructor ( props ) {
    super ()
    this.state = {
      arr : []
    }
  };
  clickHandler = ( ) => {
    console.log ( this.props.tasks )
    this.props.tryToAddTask ( );
    this.genTasks()
    console.log ( this.props.tasks )
  };
  genTasks = () => {
    let lefts = [ 50, 300, 550, 800, 1050, 1300, 1550];
    let tops = [ 50, 350, 650, 950, 1250];
    let i = 0;
    let j = 0;
    let xx = [];
    this.props.tasks.forEach (element => {
           let x = <Task 
              data = { element }
              ll = { lefts[i] }
              tt = { tops [j] } 
              key = { element.ID }/>
            i += 1;
            if ( i=== 7) {
              i = 0; 
              j += 1;
            };          
          xx.push ( x )
          }); 
      this.setState({ arr : xx }) 
  };    
  componentDidMount () {
    this.genTasks()
  }
  render() {
    return (
      <div className = 'App'>
        
        { this.state.arr }
        <button 
          className = 'AppAddTask'
          onClick = { this.clickHandler }> AddTask </button>
      </div>
    )
  }
}

let mapS = state => {
  return {
    tasks : state.tasks
  }
}

let mapAction = dispatch => {
  return {
    tryToAddTask : x => dispatch ( AAddTask () )
  }
}

export default connect(mapS, mapAction) (App);
