import React from 'react'
import styles from '../styles/footer.module.css'
import Link from 'next/link'


export default function Footer() {
  return (
    <footer className={ styles.ff }>
      <div className={ styles.xcon }>
        <div className={ styles.portion }>
          <div className={ styles.pimg }>
            <img className={ styles.img } src='logo.png' alt='' /><br />
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
              <img src='phone.png' alt='phone' /> <a href="tel:0547807870">0547807870</a>
            </p>
            <p>
              <img src='mail.png' alt='mail' /> <a href="mailto:">support@test.com</a>
            </p>
          </div>
        </div>


        <div className={ styles.portion }>
          <ul className={ styles.ul }>
            <li className={ styles.l }><Link href='./' className={ styles.ll }><p>Home</p></Link></li>
            <li className={ styles.l }><Link href='./Services ' className={ styles.ll }><p>Services</p></Link></li>
            <li className={ styles.l }><Link href='./Aboutus' className={ styles.ll }><p>About Us</p></Link></li>
            <li className={ styles.l }><Link href='./Contactus' className={ styles.ll }><p>Contact Us Now !</p></Link></li>
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
          <div className={ styles.map }>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.6509516108!2d55.50767976320164!3d25.07575945545691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z2K_YqNmKIC0g2KfZhNil2YXYp9ix2KfYqiDYp9mE2LnYsdio2YrYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1677192130571!5m2!1sar!2seg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </footer>
  )
}
