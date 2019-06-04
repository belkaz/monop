import React, { Component } from 'react';

import AAddTask from './AAddTask';

import './AddTask.sass';

class AddTask extends Component {
    clickHandler = ( ) => {    
        this.props.tryToAddTask ( )              
      }; 
    render() {
        return (
            <div 
                className = 'AddTask'
                style = { { 'opacity' : this.props.v/1 }}>

            </div>
        )
    }
}

 
let mapAction = dispatch => {
    return {
      tryToAddTask : x => dispatch ( AAddTask () )
    }
  }
export default AddTask;