let ACloseTask = ( taskId) => {
    return {
        type : 'CLOSE_TASK',
        taskId : taskId        
    }
}

export default ACloseTask;