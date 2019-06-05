import initState from './initState';

let initRed = ( state = initState, action ) => {
    switch ( action.type ) {
        case 'ADD_TASK' :
            let x = state.tasks;
            switch ( action.data.typ ) {
                case 0 : 
                    x.push( 
                        {
                        'INFO' : 'Transfer to '+ action.data.TO,
                        'WHO' : '' + action.data.WHO,
                        'WHERE' : ''+action.data.TO,
                        'WHEN' : '' + action.data.WHENSTART,
                        'REASON' : '' + action.data.REASON,
                        'ACTIVE' : '+',
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
            }
        case 'CLOSE_TASK' :
            let y = state.tasks;
            y[ action.id ].ACTIVE = '-';                     
            return {   
                ...state,             
                tasks : y.map( (el) => { return el })               
            };
        default : 
            return state            
    }
}

export default initRed;