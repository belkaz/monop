import React, { Component } from 'react';

import './AddTaskTransfer.sass';

import { connect } from 'react-redux';
import AAddTask from '../AAddTask';

class AddTaskTransfer extends Component {
    constructor ( props ) {
        super ();
        this.state = {            
            curFIO : '',
            curStartDATE : '2019-01-01',
            curEndDATE : '2019-01-01',
            curFROM : '',
            curTO : '',
            curREASON : ''
        }
    }
    genFIOSelect () {
        let x = [];
        this.props.fios.forEach(element => {
            x.push ( <option> {element} </option>)
        });
        return x
    };
    genUnitSelect () {
        let x = [];
        this.props.units.forEach(element => {
            x.push ( <option> {element} </option>)
        });
        return x
    }
    FIOhandler = ( e ) => {
        this.setState({ 
            curFIO : e.target.options[ e.target.selectedIndex ].value
        });
        
    };
    UnitFromhandler = ( e ) => {
        this.setState({ 
            curFROM : e.target.options[ e.target.selectedIndex ].value
        });
        
    };
    UnitTohandler = ( e ) => {
        this.setState({ 
            curTO : e.target.options[ e.target.selectedIndex ].value
        });
        
    }
    StartDATEhandler = ( e ) => {
        this.setState({ 
            curStartDATE : e.target.value
        });        
    };
    EndDATEhandler = ( e ) => {
        this.setState({ 
            curEndDATE : e.target.value
        });        
    };
    REASONhandler = ( e ) => {
        this.setState({
            curREASON : e.target.value
        })
    };
    AddTaskCloseHandler = () => {        
            this.props.tryToAddTask ( {
                typ : 0,
                WHO : this.state.curFIO,
                WHENSTART: this.state.curStartDATE,
                WHENEND : this.state.curEndDATE,
                FROM : this.state.curFROM,
                TO : this.state.curTO,
                REASON : this.state.curREASON
            } );   
            this.setState({
                curFIO : '',
                curStartDATE : '2019-01-01',
                curEndDATE : '2019-01-01',
                curFROM : '',
                curTO : '',
                curREASON : ''
            })                  
    };
    render () {
        return (
        <div classname = 'AddTaskTransfer'>
            <p 
                className = 'ATTFioLab ATTLab'
                onSelect = ''>Who</p>
            <select 
                className = 'ATTFio ATTel'
                onChange = { this.FIOhandler } >
                    { this.genFIOSelect() }   
                </select>
            <p 
                className = 'ATTUnitFromLab ATTLab'
                onSelect = ''>From</p>
            <select 
                className = 'ATTUnitFrom ATTel'
                onChange = { this.UnitFromhandler } >
                    { this.genUnitSelect() }   
            </select>
            <p 
                className = 'ATTUnitToLab ATTLab'
                onSelect = ''>To</p>
            <select 
                className = 'ATTUnitTo ATTel'
                onChange = { this.UnitTohandler } >
                    { this.genUnitSelect() }   
            </select>
            <p 
                className = 'ATTWhenStartLab ATTLab'>start</p>
            <input
                className = 'ATTWhenStart ATTel' 
                type = 'date'
                onChange = { this.StartDATEhandler }></input>
            <p 
                className = 'ATTWhenEndLab ATTLab'>end</p>
            <input
                className = 'ATTWhenEnd ATTel' 
                type = 'date'
                onChange = { this.EndDATEhandler }></input>

            <p 
                className = 'ATTReasonLab ATTLab'>Reason</p>
            <input 
                className = 'ATTReason ATTel'
                type = 'text'
                value = { this.state.curREASON }
                onChange = { this.REASONhandler }></input>

            <button 
                className = 'ATTBut'
                onClick = { this.AddTaskCloseHandler }
                >Add task</button>        
        </div>
        )
    }
} 
    
let mapState = state => {
    return {
        fios : state.fios,
        units : state.units
    }
}
let mapAction = dispatch => {
    return {
      tryToAddTask : x => dispatch ( AAddTask ( x ) )     
    }
}

export default connect ( mapState, mapAction ) ( AddTaskTransfer );