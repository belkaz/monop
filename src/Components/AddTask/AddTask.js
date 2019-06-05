import React, { Component } from 'react';

import './AddTask.sass';
import { connect } from 'react-redux';

import AddTaskClose from './AddTaskClose/AddTaskClose';

class AddTask extends Component {
    constructor ( props ) {
        super ();
        this.state = {
            selectedValue : 0
        }
    }
   
    genAddTask () {
        let x = <AddTaskClose />
        switch ( this.state.selectedValue ) {
            case 'Transfer' : {
                break
            }
            
            case 'TempAddRights' : {
                break
            }
            case 'CloseUser' :{
                x = <AddTaskClose />
                break
            }
            case 'LockUser' : {
                break
            }
            default : {}
        }
        return x
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
                { this.genAddTask() }
            </div>
        )
    }
}

let mapS = state => {
    return {
        v : state.addTaskOpacity
    }
} 



export default connect( mapS ) (AddTask);