import React, { Component } from 'react';
import './Task.sass';

import { connect } from 'react-redux';

import ACloseTask from './ACloseTask';

class Task extends Component {
    
    clickHandler = () => {
        this.props.tryToCloseTask ( this.props.data.ID/1 )        
    };
    
    render() {
        return (
            <div 
                className = 'Task'
                style = {
                    { 'left' : this.props.ll + 'px', 
                      'top'  : this.props.tt + 'px',
                      'backgroundColor' : this.props.back
                  } 
                }                
                id = { this.props.data.ID}>                
                <p className = 'TaskInfo'> { this.props.data.INFO }</p>
                <p className = 'TaskWho'> { this.props.data.WHO }</p>
                <p className = 'TaskWhen'> { this.props.data.WHEN }</p>
                <p className = 'TaskReason'> { this.props.data.REASON }</p>
                <p className = 'TaskAdd'> {'___________________'}</p>
                <button
                    className = 'TaskCloseBut'
                    onClick = { this.clickHandler }>Close task </button>
            </div>
        )
    }
}

let mapState = state => {
    return {}
}

let mapAction = dispatch => {
    return {
        tryToCloseTask : id => dispatch ( ACloseTask ( id ) )
    }
}

export default connect (mapState, mapAction) (Task);