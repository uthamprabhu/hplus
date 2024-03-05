import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <header className="imageheader"></header>
      <div className="container">
        <nav className="nav" role="navigation">
          <div className="container nav-elements">
            <div className="branding">
              <a href="#home"><img src="images/hpluslogo.svg" alt="Logo - H Plus Sports" /></a>
              <p className="address">100 Main Street<br />
              Seattle, WA 98144
            </p>
            </div>
            <ul className="navbar">
              <li><a href="#home">home</a></li>
              <li><a href="#history">history</a></li>
              <li><a href="#products">products</a></li>
              <li><a href="#guarantee">guarantee</a></li>
              <li><a href="#people">people</a></li>
            </ul>
          </div>
        </nav>
        <p className="legal">H+ Sport is a fictitious brand created by lynda.com solely for the purpose of training. All products and people associated with H+ Sport are also fictitious. Any resemblance to real brands, products, or people is purely coincidental. Information provided about the product is also fictitious and should not be construed to be representative of actual products on the market in a similar product category.</p>
      </div>
    </footer>
  );
}

export default Footer;