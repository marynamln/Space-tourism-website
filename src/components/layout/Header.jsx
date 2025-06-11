import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../App.scss'
import '../../styles/components/_header.scss'
import logo from '../../assets/shared/logo.svg'
import burger from '../../assets/shared/icon-hamburger.svg'
import close from '../../assets/shared/icon-close.svg'

function Header() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }

        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className='header'>
                <NavLink to="/home" className="logo-btn"><img className='logo' src={logo} /></NavLink>
                <div className='header-line'></div>
                {windowWidth > 576 ? 
                <nav className='head-menu'>
                    <NavLink to="/home" className="nav-link">
                        00
                        <p className="nav-link-tx">Home</p>
                    </NavLink>
                    <NavLink to="/destination" className="nav-link">
                        01
                        <p className="nav-link-tx">Destination</p>
                    </NavLink>
                    <NavLink to="/crew" className="nav-link">
                        02
                        <p className="nav-link-tx">Crew</p>
                    </NavLink>
                    <NavLink to="/technology" className="nav-link">
                        03
                        <p className="nav-link-tx">Technology</p>
                    </NavLink>
                </nav>
                :
                <>
                <button className='burger'><img className='img-burger' src={burger} onClick={toggleMobileMenu} /></button>

                <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}>
                    <button className='mobile-menu__close' onClick={closeMobileMenu}>
                        <img src={close} alt="Close" />
                    </button>
                        
                    <nav className='mobile-menu__nav'>
                        <NavLink to="/home" className="mobile-menu__link" onClick={closeMobileMenu} >
                            00 HOME
                        </NavLink>
                        <NavLink to="/destination" className="mobile-menu__link" onClick={closeMobileMenu} >
                            01 DESTINATION
                        </NavLink>
                        <NavLink to="/crew" className="mobile-menu__link" onClick={closeMobileMenu} >
                            02 CREW
                        </NavLink>
                        <NavLink to="/technology" className="mobile-menu__link" onClick={closeMobileMenu} >
                            03 TECHNOLOGY
                        </NavLink>
                    </nav>
                </div>

                {isMobileMenuOpen && (<div className="mobile-menu__overlay" onClick={closeMobileMenu} /> )}
                </>
                }
            </header>
        </>
    )
}

export default Header;