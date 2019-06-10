import React, { Component } from 'react';

import './Main.sass';

import { connect } from 'react-redux';
import AShowAddTaskBar from './AShowAddTaskBar';
import AddTask from '../AddTask/AddTask';
import ALoadData from './ALoadData';
import AClearTasks from './AClearTask';
import ALoadFIOServ from './ALoadFIOServ';

import Task from '../Task/Task';


class Main extends Component {
  constructor ( props ) {
    super ();
    this.state = {
      arr : []        
    }
  }   
  sortArr ( objArr ) {
    objArr.forEach ( el => {      
      try {
        el.TASKDATE = new Date( el.WHEN.split('_')[0] )
      }
      catch ( err ) {
        // el.TASKDATE = el.WHEN
      }      
    })    
    return objArr.sort((a, b) => (a.TASKDATE > b.TASKDATE) ? 1 : -1);
  }
  componentDidMount ( ) {      
      this.props.tryToClearTasks(); 
      this.props.tryToLoadData();     
      this.props.tryToLoadFIOS(); 
      setInterval( () => {
        this.props.tryToClearTasks(); 
        this.props.tryToLoadData();
      }, 60000)      
  };    

  componentWillReceiveProps ( newProps ) {     
    let tArr = (this.genTasks ( this.props.tasks ));
    this.setState({ arr :  tArr});
  };

  setbackColor ( taskDate ) {
    let color = '#0F0';
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = yyyy + '-' + mm + '-' + dd;
     
    switch ( new Date(today) - new Date(taskDate) ) {
      case 0 :
          color = '#F00';
          break;
      case 86400000 :
          color = '#FF0';
          break;
      default :
          color = '#0F0'
    }
    if ( new Date(today) - new Date(taskDate)  > 0 ) {
      color = '#F00'
    } 
    return color;
  };
  componentWillUpdate () {

  }
  genTasks = ( pr ) => {
        let lefts = [ 50, 300, 550, 800, 1050, 1300, 1550];
        let tops = [ 50, 350, 650, 950, 1250];
        let i = 0;
        let j = 0;
        let xx = [];

        this.sortArr(pr).forEach (element => {
          if ( element.ACTIVE === '+' ) {
               let x = <Task 
                  data = { element }
                  ll = { lefts[i] }
                  tt = { tops[j] } 
                  key = { element.ID }                 
                  back = { this.setbackColor ( element.TASKDATE ) } />
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
  clickHandler = () => {      
    this.props.tryToSwitchATBar()
  };    
 
  render() {    
    return (
      <div 
        className = 'Main'
       >
        <div>{ this.state.arr }</div>
        <AddTask />
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
};

let mapAction = dispatch => {
  return {
    tryToSwitchATBar : x => dispatch ( AShowAddTaskBar() ),
    tryToLoadData : y => dispatch ( ALoadData (  )),
    tryToClearTasks : y => dispatch ( AClearTasks () ),
    tryToLoadFIOS : y => dispatch ( ALoadFIOServ () )
  }
}
 
export default connect( mapS, mapAction ) ( Main );
