const express = require ('express');
const app = express();
const fs = require ('fs');
const cors = require ('cors');

let files = [];

let allUsersData = [];

function FindUnclosedTasts () {
  allUsersData = [];
  files = [];
  fs.readdirSync('./users/').forEach( el => {
    files.push ( el )
  });
  files.forEach( el => {
    try {
      let ob = JSON.parse( fs.readFileSync('./users/' +el, 'utf8'));
      allUsersData.push ( ob ) 
    }
    catch ( err ) {
      console.log ( el )
    }
  });
  let rez = [];
  allUsersData.forEach ( el => {
    let logsArr = el.LOGS;
    logsArr.forEach ( al => {            
      if ( al.CLOSED === "-") {
      rez.push({
        TYPE : al.TYPE,
        WHO : el.FIO,
        FROM : al.FROM,
        TO : al.TO,
        START : al.START,
        END: al.END,
        REASON : al.REASON,
	    WHEN: al.WHEN,		    
      })
    }
  })
})    
return rez;  
}

app.use( cors() )

app.get('/unclosed', function ( req, res, next ) {
  res.send( FindUnclosedTasts() );
  next();
});

app.get ('/fios', function ( req, res, next ) {
  let fios = [];
  let ff = [];
  fs.readdirSync('./users/').forEach( el => {
    ff.push ( el )
  });
  ff.forEach( el => {
    try {
      let ob = JSON.parse( fs.readFileSync('./users/' +el, 'utf8'));
      fios.push ( ob.FIO ) 
    }
    catch ( err ) {
      console.log ( el )
    }
  });     
  res.send ( fios );
  next();
});

app.get('/writeTransfer/:fio/:newData', function ( req, res, next)  {
  console.log ( 'Write request ')
  let fileName = '';       
  allUsersData.forEach ( el => {        
    if ( el.FIO === req.params.fio ) {        
      fileName = el.FILENAME;
      let rr = []
      el.LOGS.forEach ( al => {
        if ( al.ACTIVE === '-' ) {
          rr.push( al )
        };
      })
      let qq = JSON.parse(req.params.newData);
	  el.LOGS.unshift ({
        "REASON" : qq.curREASON,
        "TYPE" : "TRANSFER",
        "FROM" : qq.curFROM,
        "TO" : qq.curTO,
        "START" : qq.curStartDATE + '_' + qq.curSTime,
        "END" : qq.curEndDATE + '_' + qq.curETime,
        "INFO" : qq.curINFO,
        "CLOSED"  : "-"
      });
	  console.log( el.LOGS );
	  fs.writeFile('./users/'+ fileName +'.json', JSON.stringify( el, null, 2 ), 'utf8', ()=>{});
	}
    });
    res.send ('200');        
    next ();
})

app.get('/writeClose/:fio/:', function ( req, res, next ) {
  let fileName = '';
  res.send('200');
  next();
})

app.listen( 9999, function() {
  console.log ( 'SERVER ON' )
});