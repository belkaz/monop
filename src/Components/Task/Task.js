import React, { Component } from 'react';
import './Task.sass';

import { connect } from 'react-redux';

class Task extends Component {
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
            </div>
        )
    }
}

let mapState = state => {
    return {
        
    }
}

export default connect (mapState) (Task);