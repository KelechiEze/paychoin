import { Mail, Phone, MapPin, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-icon">P</div>
              <span className="brand-text">Paycoin</span>
            </div>
            <p className="brand-description">
              Leading the future of cryptocurrency trading with secure, innovative, and profitable investment solutions.
            </p>
           {/*<div className="social-links">
              <a href="#" className="social-link"><Twitter /></a>
              <a href="#" className="social-link"><Facebook /></a>
              <a href="#" className="social-link"><Linkedin /></a>
              <a href="#" className="social-link"><Instagram /></a>
            </div>*/}
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#features">Why Choose Us</a>
              <a href="#investment">Investment Plans</a>
              <a href="#testimonials">Testimonials</a>
            </div>
            <div className="link-group">
              <h4>Support</h4>
              <a href="#contact">Contact Us</a>
              <a href="#">Help Center</a>
              <a href="#">Documentation</a>
              <a href="#">Security</a>
            </div>
            <div className="link-group">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Compliance</a>
            </div>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>600 E 4th St, Charlotte, NC</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Paycoin. All rights reserved.</p>
          <p>Licensed and regulated cryptocurrency platform.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;