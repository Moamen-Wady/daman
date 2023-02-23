import React from 'react'
import styles from '../styles/footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={ styles.ff }>
      <div className={ styles.xcon }>
        <div className={ styles.portion }>
          <div className={ styles.pimg }>
            <img className={ styles.img } src='/logo.png' alt='' /><br />
          </div>
          <div className={ styles.contact }>
            <h1>Quick Contact Info</h1>
            <p>
              Lorem ipsum dolor sit amet,
              the administration of justice,
              I may hear, finally, be expanded
              on, say, a certain pro cu neglegentur.
              Mazim.Unusual or something.
            </p>
            <p>
              <img src='location.png' alt='location' /> 2130 Fulton Street, San Francisco
            </p>
            <p>
              <img src='phone.png' alt='phone' /> <a>+(15) 94117-1080</a>
            </p>
            <p>
              <img src='mail.png' alt='mail' /> <a>support@test.com</a>
            </p>
          </div>
        </div>


        <div className={ styles.portion }>
          <ul className={ styles.ul }>
            <li className={ styles.l }><a href='/' className={ styles.ll }><p>Home</p></a></li>
            <li className={ styles.l }><a href='/Services ' className={ styles.ll }><p>Services</p></a></li>
            <li className={ styles.l }><a href='/Aboutus' className={ styles.ll }><p>About Us</p></a></li>
            <li className={ styles.l }><a href='/Contactus' className={ styles.ll }><p>Contact Us Now !</p></a></li>
          </ul>
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
    </footer>
  )
}
