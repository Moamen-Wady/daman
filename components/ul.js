import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'

export default function Ul() {
    return (
        
            <ul className={ styles.ul }>
                <li className={ styles.l }><img className={ styles.img } src='/logo.png' alt='' /></li>
            <li className={ styles.l }><a href='/' className={ styles.ll }><p>Home</p></a></li>
            <li className={ styles.l }><a href='/Services ' className={ styles.ll }><p>Services</p></a></li>
            <li className={ styles.l }><a href='/Aboutus' className={ styles.ll }><p>About Us</p></a></li>
            <li className={ styles.r }><a href='/Contactus' className={ styles.ll }><p>Contact Us Now !</p></a></li>
            </ul> )
}
