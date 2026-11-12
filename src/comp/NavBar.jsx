import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import FullLogo from './FullLogo';
import './NavBar.css';


function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav">
      <div className="cont nav__inner">
        

        <FullLogo></FullLogo>

        <div className="nav__right">
          <nav className="nav__links" aria-label="Main navigation">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/join">Join</NavLink>
            <NavLink to="/support_us">Support us</NavLink>
          </nav>


          <div className="nav__more">
            <button
              type="button"
              className="nav__menu-button"
              aria-label="Open more navigation links"
              aria-expanded={menuOpen}
              // onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>            
          </div>



        </div>
      </div>
    </header>
  );
}

export default NavBar;