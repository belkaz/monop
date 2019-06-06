import React, { Component } from 'react';

import { connect } from 'react-redux';
import AAddTask from '../AAddTask';

import './AddTaskClose.sass';

class AddTaskClose  extends Component {
    constructor ( props ) {
        super ();
        this.state = {            
            curFIO : '',
            curDATE : '2019-01-01',
            curREASON : ''
        }
    }
    genSelect () {
        let x = [];
        this.props.fios.forEach(element => {
            x.push ( <option key = {''+element}> {element} </option>)
        });
        return x
    };
    FIOhandler = ( e ) => {
        this.setState({ 
            curFIO : e.target.options[ e.target.selectedIndex ].value
        });
        
    };
    DATEhandler = ( e ) => {
        this.setState({ 
            curDATE : e.target.value
        });        
    };
    REASONhandler = ( e ) => {
        this.setState({
            curREASON : e.target.value
        })
    };
    AddTaskCloseHandler = () => {        
            this.props.tryToAddTask ( {
                typ : 2,
                WHO : this.state.curFIO,
                WHEN: this.state.curDATE,
                REASON : this.state.curREASON
            } );   
            this.setState({
                curFIO : '',
                curDATE : '2019-01-01',
                curREASON : ''
            })                  
    };
    render () {
        return (
        <div className = 'AddTaskClose'>

            <p 
                className = 'ATCFioLab'
                >Who</p>
            <select 
                className = 'ATCFio'
                onChange = { this.FIOhandler } >
                    { this.genSelect() }   
                </select>

            <p 
                className = 'ATCWhenLab'>When</p>
            <input
                className = 'ATCWhen' 
                type = 'date'
                onChange = { this.DATEhandler }></input>

            <p 
                className = 'ATCReasonLab'>Reason</p>
            <input 
                className = 'ATCReason'
                type = 'text'
                value = { this.state.curREASON }
                onChange = { this.REASONhandler }></input>

            <button 
                className = 'ATCBut'
                onClick = { this.AddTaskCloseHandler }
                >Add task</button>        
        </div>
        )
    }
} 
    
let mapState = state => {
    return {
        fios : state.fios
    }
}
let mapAction = dispatch => {
    return {
      tryToAddTask : x => dispatch ( AAddTask ( x ) )     
    }
  }

export default connect ( mapState, mapAction ) (AddTaskClose);