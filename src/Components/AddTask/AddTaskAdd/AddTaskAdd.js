import React, { Component } from 'react';

import './AddTaskAdd.sass';

import { connect } from 'react-redux';
import AAddTask from '../AAddTask';

class AddTaskAdd extends Component {
    constructor ( props ) {
        super ();
        this.state = {
            curFIO : '',
            curREASON : '',
            curWHERE : '',
            curSDATE : '',
            curEDATE : '',
            curINFO : ''
        }
    };
    genFIOSelect () {
        let x = [];
        this.props.fios.forEach(element => {
            x.push ( <option key = {''+element}> {element} </option>)
        });
        return x
    };
    genUnitSelect () {
        let x = [];
        this.props.units.forEach(element => {
            x.push ( <option key = {''+element}> {element} </option>)
        });
        return x
    };
    FIOhandler = ( e ) => {
        this.setState ( {
            curFIO : e.target.options[ e.target.selectedIndex ].value
        } )
    };
    WHEREhandler = ( e ) => {
        this.setState ({
            curWHERE : e.target.options[ e.target.selectedIndex ].value 
        })
    };
    SDATEhandler = ( e ) => {
        this.setState ({
            curSDATE : e.target.value 
        })
    };
    EDATEhandler = ( e ) => {
        this.setState ({
            curEDATE : e.target.value 
        })
    };
    REASONhandler = ( e ) => {
        this.setState({
            curREASON : e.target.value
        })
    }
    INFOhandler = ( e ) => {
        this.setState ({
            curINFO : e.target.value
        })
    };
    BUThandler = () => {
        this.props.tryToAddTask( {
            typ: 1,
            WHO: this.state.curFIO,
            WHERE: this.state.curWHERE,
            WHENSTART : this.state.curSDATE,
            WHENEND : this.state.curEDATE,
            REASON: this.state.curREASON,
            INFO : this.state.curINFO
        });
        this.setState({
            curFIO : '',
            curREASON : '',
            curWHERE : '',
            curSDATE : '',
            curEDATE : '',
            curINFO : ''
        });
    }
    render() {
        return (
            <div className = 'AddTaskAdd'>
                <p className = 'ATAFIOLab ATALab'>WHO</p>
                <select 
                    className = 'ATAFIO ATAEl'
                    onChange = { this.FIOhandler }>
                        { this.genFIOSelect() }
                </select>

                <p className = 'ATAWHERELab ATALab'>WHERE</p>
                <select 
                    className = 'ATAWHERE ATAEl'
                    onChange = { this.WHERhandler }>
                        { this.genUnitSelect() }
                </select>

                <p className = 'ATASDATELab ATALab'>START</p>
                <input 
                    className = 'ATASDATE ATAEl'
                    type = 'date'
                    onChange = { this.SDATEhandler }></input>

                <p className = 'ATAEDATELab ATALab'>END</p>
                <input 
                    className = 'ATAEDATE ATAEl'
                    type = 'date'
                    onChange = { this.EDATEhandler }></input>
                
                <p className = 'ATAREASONLab ATALab'>REASON</p>
                <input 
                    className = 'ATAREASON ATAEl'
                    type = 'text'
                    value = { this.state.curREASON }
                    onChange = { this.REASONhandler }></input>

                <p className = 'ATAINFOLab ATALab'>RIGHTS</p>
                <input 
                    className = "ATAINFO ATAEl"
                    type = 'text'
                    value = { this.state.curINFO }
                    onChange = { this.INFOhandler }></input>

                <button                     
                    className = 'ATABut'
                    onClick = { this.BUThandler }>Add task</button>
            </div>
        )
    }
}

let mapState = state => {
    return {
        fios : state.fios,
        units: state.units
    }
}

let mapAction = dispatch => {
    return {
        tryToAddTask : x => dispatch ( AAddTask ( x ) )
    }
}

export default connect( mapState, mapAction ) ( AddTaskAdd );