const express = require ('express');
const app = express();
const fs = require ('fs');
const cors = require ('cors');

let files = [];

fs.readdirSync('./users/').forEach( el => {
    files.push ( el )
});

let allUsersData = [];

files.forEach( el => {
    try {
        let ob = JSON.parse( fs.readFileSync('./users/' +el, 'utf8'));
        allUsersData.push ( ob ) 
    }
    catch ( err ) {
        console.log ( el )
    }
});

function FindUnclosedTasts () {
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
                    REASON : al.REASON
                })
            }
        })
    })
    return rez;
}

app.use( cors() )

app.get('/unclosed', function ( req, res, next ) {
    res.send( FindUnclosedTasts() )
    next();
});


app.listen( 9999, function() {
    console.log ( 'SERVER ON' )
});