import { useState, useEffect } from "react";
import { Menu, X, ChevronUp } from "lucide-react";
import "./Navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleSignIn = () => {
    // Immediate navigation, faster than <a>
    window.location.href = "https://paycoin-dashboard.netlify.app/";
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Investment Plans", id: "investment" },
    { name: "About", id: "about" },
    { name: "Why Choose Us", id: "features" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <div className="brand-logo">
              <div className="logo-icon">P</div>
              <span className="brand-text">Paycoin</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-menu desktop-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            {/* Sign In Button (Fast Redirect) */}
            <button onClick={handleSignIn} className="sign-in-btn">
              SIGN IN
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="mobile-nav-link"
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-top-btn">
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default Navigation;
