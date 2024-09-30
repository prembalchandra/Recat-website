import React from 'react';
import { NavLink } from 'react-router-dom'; 


const FooterComponent = () => {
  return (
    <section className="footer">
     <div className='srcn_container'>
     <div className="footer-row">
        <div className="footer-col">
          <h4>Info</h4>
          <ul className="links">
            <li><NavLink to="#">About Us</NavLink></li>
            <li><NavLink to="#">Compressions</NavLink></li>
            <li><NavLink to="#">Customers</NavLink></li>
            <li><NavLink to="#">Service</NavLink></li>
            <li><NavLink to="#">Collection</NavLink></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="links">
            <li><NavLink to="#">Free Designs</NavLink></li>
            <li><NavLink to="#">Latest Designs</NavLink></li>
            <li><NavLink to="#">Themes</NavLink></li>
            <li><NavLink to="#">Popular Designs</NavLink></li>
            <li><NavLink to="#">Art Skills</NavLink></li>
            <li><NavLink to="#">New Uploads</NavLink></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="links">
            <li><NavLink to="#">Customer Agreement</NavLink></li>
            <li><NavLink to="#">Privacy Policy</NavLink></li>
            <li><NavLink to="#">GDPR</NavLink></li>
            <li><NavLink to="#">Security</NavLink></li>
            <li><NavLink to="#">Testimonials</NavLink></li>
            <li><NavLink to="#">Media Kit</NavLink></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action="#">
            <input type="email" placeholder="Your email" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className="icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
};

export default FooterComponent;
