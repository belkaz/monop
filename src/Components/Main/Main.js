import React, { Component } from 'react';

import './Main.sass';

import { connect } from 'react-redux';
import Task from '../Task/Task';
import AddTask from '../AddTask/AddTask';

class Main extends Component {
  constructor ( props ) {
    super ();
    this.state = {
        arr : [],
        sub : 0
    }
}
    componentDidMount () {    
        this.setState({ arr : this.genTasks( this.props.tasks ) })
      }
    
    componentWillReceiveProps ( newProps ) {     
        this.setState({ arr : this.genTasks ( newProps.tasks )})    
      }
    genTasks = ( pr ) => {
        let lefts = [ 50, 300, 550, 800, 1050, 1300, 1550];
        let tops = [ 50, 350, 650, 950, 1250];
        let i = 0;
        let j = 0;
        let xx = [];
        pr.forEach (element => {
          if ( element.ACTIVE === '+' ) {
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
              }
            }); 
           return xx;     
      };  

    clickHandler ( qq ) {      
      var xx = qq ===0 ? 100 : 0;
      this.setState ({ sub : xx })
    };
    
    render() {
        return (
            <div className = 'Main'>
                <div>{ this.state.arr }</div>
                <AddTask v = {''+this.state.sub } />
                <button 
                className = 'AppAddTask'
                onClick = { () => { this.clickHandler( this.state.sub )}  }> AddTask </button>
            </div>
        )
    } 
}

let mapS = state => {
    return {
      tasks : state.tasks    
    }
}
 

export default connect(mapS) ( Main );
