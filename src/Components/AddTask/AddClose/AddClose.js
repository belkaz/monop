import React, { Component } from 'react';

import './AddClose.sass';

const Hello = ( props ) => 
    <div classname = 'AddTaskClose'>
        <p className = 'ATCFioLab'>Who</p>
        <select className = 'ATCFio'></select>
        <p className = 'ATCWhenLab'>Wheb</p>
        <input
            className = 'ATCWhen' 
            type = 'date'></input>
        <p className = 'ATCReasonLab'>Reason</p>
        <input 
            className = 'ATCReason'
            type = 'text'></input>
        
    </div>