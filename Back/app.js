const express = require( 'express' );
const cors = require( 'cors' );
const http = require( 'http' );
const helmet = require( 'helmet' );
const compression = require( 'compression' );
const app = express();
const corsOptions = {
    origin: [ 'http://localhost:3000', 'http://localhost:3005' ],
    credentials: true,
    optionSuccessStatus: 200
}
app.use( cors( corsOptions ) );
app.use( express.json() );
app.use( helmet() );
app.use( compression() );
app.use( express.urlencoded( { extended: true } ) );
app.use( '/', require( './mail' ) )
const serverx = http.createServer( app );
serverx.listen( 3005, console.log( "ok" ) );


app.get( "/", ( req, res ) => {
    res.send( 'ok' )
} )