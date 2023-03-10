import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from '../styles/contact.module.css'
import api from '../components/api.js'
export default function Contactus() {
    var [ name, setname ] = useState( '' )
    var [ phone, setphone ] = useState( '' )
    var [ note, setnote ] = useState( '' )
    var [ mail, setmail ] = useState( '' )
    var [ activity, setactivity ] = useState( '' )
    var [ residence, setresidence ] = useState( '' )
    var [ alert, setalert ] = useState( <></> )


    const handleChange1 = ( event ) => {
        var value = event.target.value;
        setname( value );
    };

    const handleChange2 = ( event ) => {
        var value = event.target.value;
        setphone( value );
    };

    const handleChange4 = ( event ) => {
        var value = event.target.value;
        setactivity( value );
    };

    const handleChange3 = ( event ) => {
        var value = event.target.value;
        setresidence( value );
    };

    const handleChange5 = ( event ) => {
        var value = event.target.value;
        setnote( value );
    };
    const handleChange6 = ( event ) => {
        var value = event.target.value;
        setmail( value );
    };

    function taker( e ) {
        e.preventDefault()
        if ( name === '' || phone === '' || mail === '' || activity === '' || residence === '' || note === '' ) {
            window.alert( "PLEASE FILL ALL FIELDS IN THE FORM " );
        }
        else {send()}
    };


    const send = async () => {
        var respon = ( await api.post( '/mail', {
            name: name,
            phone: phone,
            residence: residence,
            note: note,
            activity: activity,
            mail:mail
        } ) ).data;
        if ( respon.st == 'ok' ) {
            setalert( <p style={ { color: 'green' } }>Your Message Was Sent Successfully</p> )
        }
        if ( respon.st == 'error' ) {
            setalert( <p style={ { color: 'red' } }>There Has Been An Error, Please try Again</p> )
        }
        setTimeout( clearNote, 2000 )
    }

    function clearNote() {
        setalert( <p ></p> )
    }

    const reset = (e) => {
        e.preventDefault()
        document.getElementById( 'form' ).reset()
        setalert( <p style={ { color: 'green' } }>Form Cleared</p> )
        setTimeout( clearNote, 2000 )
    }

    return (
        <>
            <Head>
                <title>Contact Us</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="favicon.png" />
            </Head>

            <div className={ styles.container }>
                <div className={ styles.form1 }>
                    <div className={ styles.form }>
                        <img src='/logo.png' alt='' />
                        <p>
                            Required Informations
                        </p>
                        <form id='form' >
                            <input type='text' placeholder='Name / ??????????' onChange={ handleChange1 } />
                            <input type='email' placeholder='E-mail / ??????????????' onChange={ handleChange6 } />
                            <input type='tel' placeholder='Your Phone Number / ?????? ????????????????' onChange={ handleChange2 } />
                            <input type='text' placeholder='Activity / ?????? ????????????' onChange={ handleChange3 } />
                            <input type='text' placeholder='Number of Residences or Investors / ?????? ???????????????? ???? ????????????????????' onChange={ handleChange4 } />
                            <textarea type='textbox' placeholder='Notes / ??????????????' onChange={ handleChange5 } />
                            <>{ alert }</>
                            <button onClick={ taker} ><span >
                                <p>Confirm and Send</p>
                            </span></button>
                            <button><span onClick={ reset } >
                                <p>Clear Form</p>
                            </span></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
