import initState from './initState';

let initRed = ( state = initState, action ) => {
    switch ( action.type ) {
        case 'ADD_TASK' :
            let x = state.tasks;
            x.push( 
                {
                'INFO' : '1',
                'WHO' : '2',
                'WHERE' : '3',
                'WHEN' : '4',
                'REASON' : '5',
                'ACTIVE' : '+',
                'ID' : x.length
            }); 
            
            return {                
                tasks : x.map( (el) => { return el })              
            };
        case 'CLOSE_TASK' :
            let y = state.tasks;
            y [ action.id ].ACTIVE = '-';                     
            return {                
                tasks : y.map( (el) => { return el })               
            };
        default :
            return state
            
    }
}

export default initRed;