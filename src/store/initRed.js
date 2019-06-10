import initState from './initState';
import { stat } from 'fs';

let initRed = ( state = initState, action ) => { 
    switch ( action.type ) {                    
        case 'ADD_TASK' : 
            var x = state.tasks;
            switch ( action.data.typ ) {
                case 0 : 
                    x.push( 
                        {
                        'INFO' : 'Transfer to '+ action.data.TO,
                        'WHO' : '' + action.data.WHO,
                        'WHERE' : ''+action.data.TO,
                        'WHEN' : '' + action.data.WHENSTART  ,
                        'REASON' : '' + action.data.REASON,
                        'ACTIVE' : '+',
                        'TASKDATE' : '',
                        'ID' : x.length
                    });
                    x.push( 
                        {
                        'INFO' : 'Transfer back to '+action.data.FROM,
                        'WHO' : '' + action.data.WHO,
                        'WHERE' : ''+action.data.FROM,
                        'WHEN' : '' + action.data.WHENEND,
                        'REASON' : '' + action.data.REASON,
                        'ACTIVE' : '+',
                        'TASKDATE' : '',
                        'ID' : x.length
                    });
                    break; 
                case 1 :                                      
                    x.push( 
                        {
                        'INFO' : 'Add rights ' + action.data.INFO,
                        'WHO' : '' + action.data.WHO,
                        'WHERE' : ''+action.data.TO,
                        'WHEN' : '' + action.data.WHENSTART,
                        'REASON' : '' + action.data.REASON,
                        'ACTIVE' : '+',
                        'TASKDATE' : '',
                        'ID' : x.length
                    });
                    x.push( 
                        {
                        'INFO' : 'Close rights',
                        'WHO' : '' + action.data.WHO,
                        'WHERE' : ''+action.data.TO,
                        'WHEN' : '' + action.data.WHENEND,
                        'REASON' : '' + action.data.REASON,
                        'ACTIVE' : action.data.WHENEND === "-" ? '-':'+',
                        'TASKDATE' : '',
                        'ID' : x.length
                    });
                    break;
                case 2 : 
                    x.push( 
                        {
                        'INFO' : 'Close user',
                        'WHO' : '' + action.data.WHO,
                        'WHERE' : '',
                        'WHEN' : '' + action.data.WHEN,
                        'REASON' : '' + action.data.REASON,
                        'ACTIVE' : '+',
                        'TASKDATE' : '',
                        'ID' : x.length
                    });
                    break;                
                default : 
                    x.push( 
                        {
                        'INFO' : 'Close userasdasd',
                        'WHO' : '' + action.data.WHO,
                        'WHERE' : '',
                        'WHEN' : '' + action.data.WHEN,
                        'REASON' : '' + action.data.REASON,
                        'ACTIVE' : '+',
                        'TASKDATE' : '',
                        'ID' : x.length
                    });                
            };                    
            return { 
                ...state,               
                tasks : x.map( (el) => { return el }),
                addTaskOpacity : 0             
            };
        case 'SWITCH_ATBAR' : 
            return {
                ...state,
                addTaskOpacity : state.addTaskOpacity === 0 ? 100 : 0
            };     
        case 'CLEAR_TASKS' : 
            return {
                ...state,
                tasks : []
            };
        case 'CLOSE_TASK' :
            var y2 = state.tasks;
             y2.forEach ( el => {                
                if ( el.ID === action.id ) {
                    el.ACTIVE = '-'
                }
            })                                          
            return {   
                ...state,             
                tasks : y2.map( (el) => { return el })               
            };
        default : 
            return state            
    }
}

export default initRed;

