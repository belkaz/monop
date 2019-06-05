import React, { Component } from 'react';

import AAddTask from './AAddTask';

import './AddTask.sass';
import { connect } from 'react-redux';

class AddTask extends Component {
    constructor ( props ) {
        super ();
        this.state = {
            selectedValue : 0
        }
    }
    clickHandler ( ) {    
        this.props.tryToAddTask ( )              
      }; 
    genAddTask () {
        switch ( this.state.selectedValue ) {
            case 'Transfer' : {
                break
            }
            
            case 'TempAddRights' : {
                break
            }
            case 'CloseUser' :{
                break
            }
            case 'LockUser' : {
                break
            }
            default : {}
        }
    }
    render() {
        return (
            <div 
                className = 'AddTask'
                style = { { 'opacity' : this.props.v/1 }}>
                <select 
                    className = 'AddTaskType'
                    onChange = { ( e )=> { 
                        var tt = e.target;
                        this.setState ({ selectedValue : tt.options[ tt.selectedIndex].value });                       
                    } } >
                    <option>Transfer</option>
                    <option>TempAddRights</option>
                    <option>CloseUser</option>
                    <option>LockUser</option>
                </select>

            </div>
        )
    }
}

let mapS = state => {
    return {

    }
} 

let mapAction = dispatch => {
    return {
      tryToAddTask : x => dispatch ( AAddTask () )
    }
  }

export default connect(mapS, mapAction) (AddTask);