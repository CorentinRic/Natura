import React, {useRef} from 'react'
import { HashLink } from 'react-router-hash-link'
import './NavBar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCross} from 'react-icons/im'
import {AiFillInstagram, AiFillFacebook} from 'react-icons/ai'
import Btn from '../Btn/Btn'
import useMediaQuery from '../../utils/useMediaQuery'
import logo from '../../assets/images/logo.png'

const data = [
    {
        id : "Home",
        name : "Accueil",
        link : "/#"
    },
    {
        id : "Calendar",
        name : "Évènements",
        link : "/#calendar"
    },
    {
        id : "About",
        name : "À propos",
        link : "/#about"
    },
    {
        id : "Work",
        name : "Nos actions",
        link : "/#work"
    }
]

function NavBar() {
    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive__nav")
    }

    /* Media queries. */
    const matches = useMediaQuery("(min-width: 1030px)");

    return (
        <nav className='nav'>
            <img className='logo' src={logo} alt="logo" />
            <div ref={navRef} className="nav-menu">
                {data.map((data) => {
                        return (
                            <HashLink className='nav-menu-link' key={data.id} onClick={showNavBar} to={data.link}>{data.name}</HashLink>
                        )
                    }
                )}
                {matches ? <Btn
                link="/#contact"
                btn="Contact"
                /> : <HashLink className='nav-menu-link' onClick={showNavBar} to="/#contact">Contact</HashLink>}
                <button className='nav-btn nav-close-btn' onClick={showNavBar} aria-label="close menu">
                    <ImCross />
                </button>
                <div className="nav-socials">
                    <a href="https://fr-fr.facebook.com/" target="_blank" rel='noreferrer' aria-label="facebook"><AiFillFacebook /></a>
                    <a href="https://www.instagram.com/?hl=fr" target="_blank" rel='noreferrer' aria-label="instagram"><AiFillInstagram /></a>
                </div>
            </div>
            <button className='nav-btn' onClick={showNavBar} aria-label="Menu button">
                <GiHamburgerMenu />
            </button>
        </nav>
    )
    }

export default NavBar