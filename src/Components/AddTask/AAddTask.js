let AAddTask = ( inputData ) => {    
    return {
        type : "ADD_TASK",  
        data : inputData      
    }
}

export default AAddTask;

// format 
//     typ: 0 - transfer
//          1 - ADD temp
//          2 - close
//          3 - lock
//     who :
//     WHEN: 
//     REASON :
//     WHERE:
