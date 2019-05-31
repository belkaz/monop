import initState from './initState';

let initRed = ( state = initState, action ) => {
    switch ( action.type ) {
        case 'ADD_TASK' : 
            return {
                ...state
            };
        case 'CLOSE_TASK' :
            return {
                ...state
            };
        default :
            return state
            
    }
}

export default initRed;