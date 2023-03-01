const express = require( 'express' );
const nodemailer = require( 'nodemailer' );
const router = express.Router();

router.route( '/mail' )
router.post( '/mail', async ( req, res ) => {
    var name = req.body.name;
    var phone = req.body.phone;
    var activity = req.body.activity;
    var residence = req.body.residence;
    var note = req.body.note;
    var transporter = nodemailer.createTransport( {
        service: 'gmail',
        auth: {
            user: 'moamen.wady@gmail.com',
            pass: 'qavhjvedloxqislo'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    } );
    const mailOptions = {
        from: 'reserverencebot@gmail.com',
        to: `amr.fissou@gmail.com`,
        subject: 'Seat Registered',
        text:   `name : ${ name }
                phone: ${ phone }
                activity: ${ activity }
                residence: ${ residence }
                notes: ${ note } `
    }
    transporter.sendMail( mailOptions, function ( err, info ) {
        if ( err )
            console.log( err )
        else
            console.log( info );
        res.send( 'ok' )
    } );
} );

module.exports = router;