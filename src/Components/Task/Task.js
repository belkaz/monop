import React, { Component } from 'react';
import './Task.sass';
import { connect } from 'react-redux';

import ACloseTask from '../Task/AcloseTask';

class Task extends Component {
    clickHandler = () => {
        this.props.tryCloseTask ( this.props.st.ID )
        alert( this.props.st.ID )
    };

    render() {
        return (
            <div 
                className = 'Task'
                style = { 
                    {
                        'left' : this.props.ll + 'px',
                        'top'  : this.props.tt + 'px'
                    }
                }>
                    { this.props.st.ACTIVE}
                <p className = 'TaskInfo'> { this.props.st.INFO } </p>
                <p className = 'TaskWho'>  { this.props.st.WHO } </p>
                <p className = 'TaskWhen'> { this.props.st.WHEN }</p>                    
                <p className = 'TaskWhere'> { this.props.st.WHERE } </p>
                <p className = 'TaskReason'> { this.props.st.REASON } </p>
                <button
                    className = 'TaskClose'
                    onClick = { this.clickHandler }
                    >CloseTask</button>
            </div>
        )
    }
}

let mapState = state => {
    return {

    }
}

let mapAction = dispatch => {
    return {
      tryCloseTask : id => dispatch (ACloseTask (id))
     }
  }

export default connect (mapState, mapAction) (Task);