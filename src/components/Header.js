import React from 'react';

function Header({ currentPage, setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo">JasonRanney.com</div>
          </div>
          <nav>
            <ul>
              <li>
                <a 
                  href="#" 
                  className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                  onClick={() => handleNavClick('home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                  onClick={() => handleNavClick('about')}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={`nav-link ${currentPage === 'samples' ? 'active' : ''}`}
                  onClick={() => handleNavClick('samples')}
                >
                  Order Samples
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                  onClick={() => handleNavClick('contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header; 