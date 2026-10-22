import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shpe_logo_trans.png';
import './NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav">
      <div className="cont nav__inner">
        <Link to="/" className="nav__logoholder" aria-label="Company home">
          <img src={logo} alt="Company logo" />
          <h1>University of South Carolina</h1>
        </Link>

       

        <div className="nav__right">
          <nav className="nav__links" aria-label="Main navigation">
            <Link to="/about">About</Link>
            <Link to="/services">Events</Link>
            <Link to="/contact">Join</Link>
            <Link to="/contact">Support us</Link>
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