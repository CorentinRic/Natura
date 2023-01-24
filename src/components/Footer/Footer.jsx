import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import {AiFillInstagram, AiFillFacebook} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'

function Footer() {
  return (
    <footer id='contact'>
        <div className="footer-container">
            <h2>Nous rejoindre?</h2>
            <div className="footer-content">
                <div className="footer-box">
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <a className='footer-link' href="mailto:">association@association.com</a>
                        </li>
                        <li>06 60 06 60 06</li>
                    </ul>
                    <div className="footer-socials">
                        <a href="https://fr-fr.facebook.com/" target="_blank" rel='noreferrer' aria-label="facebook"><AiFillFacebook /></a>
                        <a href="https://www.instagram.com/?hl=fr" target="_blank" rel='noreferrer' aria-label="instagram"><AiFillInstagram /></a>
                    </div>
                </div>
                <div className="footer-box">
                    <h3>Adresse</h3>
                    <ul>
                        <li>30 rue de la gare</li>
                        <li>05000</li>
                        <li>Gap</li>
                    </ul>
                </div>
                <div className="footer-box">
                    <h3>Horaires</h3>
                    <ul>
                        <li>Mercredi: 14h - 16h</li>
                        <li>Vendredi: 14h - 16h</li>
                        <li>Dimanche: 15h - 18h</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-legal">
            <p className='footer-signature'>© 2022 par Corentin Richard.</p>
            <div className="footer-legal-content">
                <ul>
                    <li><Link className='footer-link legal-link' to='/notices'><BsArrowRightShort />Mentions légales</Link></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer