import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'

export default function Ul() {
    return (
        
            <ul className={ styles.ul }>
                <li className={ styles.l }><img className={ styles.img } src='/logo.png' alt='' /></li>
            <li className={ styles.l }><Link href='/' className={ styles.ll }><p>Home</p></Link></li>
            <li className={ styles.l }><Link href='/Services ' className={ styles.ll }><p>Services</p></Link></li>
            <li className={ styles.l }><Link href='/Aboutus' className={ styles.ll }><p>About Us</p></Link></li>
            <li className={ styles.r }><Link href='/Contactus' className={ styles.ll }><p>Contact Us Now !</p></Link></li>
            </ul> )
}
