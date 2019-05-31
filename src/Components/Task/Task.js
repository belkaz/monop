import React, { Component } from 'react';
import './Task.sass';

import { connect } from 'react-redux';

import ACloseTask from './ACloseTask';

import App from '../App/App';

class Task extends Component {
    
    clickHandler = () => {
        this.props.tryToCloseTask ( this.props.data.ID/1 )
       this.setState({ a: 12})       
    };
    
    render() {
        return (
            <div 
                className = 'Task'
                style = {
                    { 'left' : this.props.ll + 'px', 
                      'top'  : this.props.tt + 'px' } 
                }                
                id = { this.props.data.ID}>
                { this.props.data.ID}
                <button
                    className = 'TaskCloseBut'
                    onClick = { this.clickHandler }>Close task </button>
            </div>
        )
    }
}

let mapState = state => {
    return {
        tasks: state.tasks
    }
}

let mapAction = dispatch => {
    return {
        tryToCloseTask : id => dispatch ( ACloseTask ( id ) )
    }
}

export default connect (mapState, mapAction) (Task);