import Link from 'next/link'
import React from 'react'
import styles from '../styles/navbar.module.css'

export default function Navbar() {
    return (
        <div className={ styles.nvbr }>
            <div className={ styles.topbar }>
                <div>
                    <p>Aspiring To A Great Startup? WELCOME TO THE RIGHT PLACE.</p>
                    <div className={ styles.lgs }>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank" rel="noreferrer"
                        ><img src="fb.png" alt=""
                            /></a>
                        <a
                            href="https://instagram.com/"
                            target="_blank" rel="noreferrer"
                        ><img src="ig.png" alt=""
                            /></a>
                        <a
                            href="https://eg.linkedin.com/"
                            target="_blank" rel="noreferrer"
                        ><img src="li.png" alt=""
                            /></a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
