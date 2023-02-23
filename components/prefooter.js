import React from 'react'
import styles from '../styles/prefooter.module.css'
import Link from 'next/link'
export default function Prefooter() {
    return (
        <div className={styles.prf}>
            <div className={styles.left}>
                <h1>Have A Project In Mind?</h1>
                <p>We can help you bring your ideas to life.
                    Let’s talk about what we can build and raise together!</p>
            </div>
            <div className={styles.right}>
                <h1>Don’t Hesitate</h1>
                <a href='/Contactus'><span>Contact Us Now !</span></a>
                <p>OR</p>
                <a href='/Services'><span>Learn More.</span></a>
            </div>
        </div>
    )
}
