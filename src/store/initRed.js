import initState from './initState';

let initRed = ( state = initState, action ) => {
    switch ( action.type ) {
        case 'ADD_TASK' :
            let x = state.tasks;
            x.push( 
                {
                'INFO' : 'Close transfer',
                'WHO' : 'IvanovVV 21222 1202',
                'WHERE' : '16401',
                'WHEN' : '2019-06-20_20',
                'REASON' : 'dz 2019-05-05_11111',
                'ACTIVE' : '+',
                'ID' : x.length
            }); 
            
            return { 
                ...state,               
                tasks : x.map( (el) => { return el })              
            };
        case 'CLOSE_TASK' :
            let y = state.tasks;
            y [ action.id ].ACTIVE = '-';                     
            return {   
                ...state,             
                tasks : y.map( (el) => { return el })               
            };
        default : 
            return state            
    }
}

export default initRed;