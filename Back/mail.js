const express = require( 'express' );
const nodemailer = require( 'nodemailer' );
const router = express.Router();

router.route( '/mail' )
router.post( '/mail', async ( req, res ) => {
    const transporter = nodemailer.createTransport( {
        service: 'gmail',
        auth: {
            user: 'moamen.wady@gmail.com',
            pass: 'qavhjvedloxqislo'
        }
    } );
    var name = req.body.name;
    var phone = req.body.phone;
    var activity = req.body.activity;
    var residence = req.body.residence;
    var note = req.body.note;
    var mail = req.body.mail;
    const mailOptions = {
        from: `${mail}`,
        to: `moamen.wady@gmail.com`,
        subject: '<3',
        html: name, phone, activity, residence, note , mail
    }
    transporter.sendMail( mailOptions, function ( err, info ) {
        if ( err ) {
            console.log( err )
            res.send( { st: 'error' } )
        }
        else {
            console.log( info );
            res.send( { st: 'ok' } )
        }
    } );
} );

module.exports = router;