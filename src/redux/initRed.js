import initState from './initState';

let initRed = ( state = initState, action ) => {
    switch ( action.type ) {
        case 'CLOSE_TASK' : {            
            let arr = state.tasks;
            arr[ action.taskId ].ACTIVE = '-';            
            return {
                ...state,
                tasks : arr,
                curUser : action.nam             
            };                     
        };
        break;
        case 'ADD_TASK' : {
            alert( 'In add ');
            let arr = state.tasks;
            arr.push( action.data );
            return {
                ...state,
                tasks : arr,
                curUser : action.nam 
            }
        };
        break;
        default :
            return state
    }
}

export default initRed;