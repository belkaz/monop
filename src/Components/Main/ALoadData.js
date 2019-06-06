import AAddTask from '../AddTask/AAddTask';

let ALoadData = ( data ) => {    
    return (dispatch) => {
        fetch('http://localhost:9999/unclosed')
        .then(function(response) {        
          return response.json();
        })
        .then(function(data) {
          data.forEach( el => {
            //   dispatch ( AAddTask ( {data} ) )
            dispatch ( AAddTask ( {
                typ: 0,
                WHO: el.WHO,
                REASON: el.REASON,
                FROM : el.FROM,
                TO : el.TO,
                WHENSTART: el.START,
                WHENEND: el.END
            }))
            console.log ( el )
          })        
        })
        .catch( alert );   
    }
}

export default ALoadData;

// END: "2019-04-02_20"
// FROM: "UNIT1"
// REASON: "2019-06-02_12"
// START: "2019-07-02_08"
// TO: "UNIT2"
// TYPE: "TRANSFER"
// WHO: "IVANOVVV"