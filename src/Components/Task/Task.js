import React, { Component } from 'react';
import './Task.sass';

class Task extends Component {
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
                <p className = 'TaskInfo'> { this.props.st.INFO } </p>
                <p className = 'TaskWho'>  { this.props.st.WHO } </p>
                <p className = 'TaskWhen'> { this.props.st.WHEN }</p>                    
                <p className = 'TaskWhere'> { this.props.st.WHERE } </p>
                <p className = 'TaskReason'> { this.props.st.REASON } </p>
                <button
                    className = 'TaskClose'>CloseTask</button>
            </div>
        )
    }
}

export default Task;