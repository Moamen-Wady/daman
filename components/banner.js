import React from 'react'
import styles from '../styles/banner.module.css'
import { useState , useEffect } from 'react';
import Link from 'next/link';
export default function Banner() {

    var [ z, setZ ] = useState( 0 );
    function banner() {
        var x = [ 0, 1, 2, 3 ];
        var i;
        for ( i = 0; i < x.length; i++ ) {
            document.getElementById( `${ x[ i ] }` ).style.opacity = 0;
        }
        setZ( z += 1 )
        if ( z > ( x.length - 1 ) ) { z = 0 }
        document.getElementById( `${ x[ z ] }` ).style.opacity = 1;
    };

    useEffect( () => {
        if ( typeof window !== "undefined" ) {
            var x = [ 0, 1, 2, 3 ];
            document.getElementById( `${ x[ z ] }` ).style.opacity = 1;
            setInterval( () => {
                banner()
            }, 4000 );
        }
    }, []
    );


    return (
        <header className={ styles.head }>
            <div id={ 0 } className={ styles.slz }>
                <p className={ styles.txtx }>Welcome To  <br /><br /> <strong>DAMAN</strong> Solutions.</p>
                <img src='btw.png' alt='' className={styles.mid}/>
                <img src='1.jpg' alt='' className={ styles.bg } />
            </div>
            <div id={ 1 } className={ styles.slz }>
                <p className={ styles.txtx }>Startup Consultation Company<br /><br />Based In UAE.</p>
                <img src='btw.png' alt='' className={styles.mid}/>
                <img src='2.jpg' alt='' className={ styles.bg } />
            </div>
            <div id={ 2 } className={ styles.slz }>
                <p className={ styles.txtx }>Upgrade Your Business <br /><br />& Achieve Your Success<br /><br />With Us!</p>
                <img src='btw.png' alt='' className={styles.mid}/>
                <img src='3.jpg' alt='' className={ styles.bg } />
            </div>
            <div id={ 3 } className={ styles.slz }>
                <p className={ styles.txtx }>Join Our Family...<br /><br />Now! <br /><br /><a href='/Contactus' className={styles.lnkbtn}>Contact Us</a> </p>
                <img src='btw.png' alt='' className={styles.mid}/>
                <img src='4.jpg' alt='' className={ styles.bg } />
            </div>
        </header>
    )
}
