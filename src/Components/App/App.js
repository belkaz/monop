import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Task from '../Task/Task';

class App extends Component {
  lefts = [ 50, 300, 550, 800, 1050, 1300, 1550];
  tops = [ 50, 350, 650, 950, 1250];
  i = 0;
  j = 0;
  xx = this.props.tasks.map( element => {
          let x = <Task 
            data = { element }
            ll = { this.lefts[this.i] }
            tt = { this.tops [this.j] } 
            key = { element.ID }/>
          this.i += 1;
          if ( this.i === 7) {
            this.i = 0; 
            this.j += 1;
          };
        return x  
        });        
          
  render() {
    return (
      <div className = 'App'>
        { this.xx }
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
