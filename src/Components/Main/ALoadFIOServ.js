import ALoadFIOS from './ALoadFIOS';

let ALoadFIOServ = (  ) => {    
    return (dispatch) => {        
        fetch('http://localhost:9999/fios')
        .then(function(response) {        
          return response.json();
        })
        .then(function(data) {            
            console.log ( data );
            dispatch ( ALoadFIOS ( data ))
        })
    }
}

export default ALoadFIOServ ;