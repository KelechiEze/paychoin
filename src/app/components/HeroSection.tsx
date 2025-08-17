import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Shield, Zap, TrendingUp } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <Image 
          src="/hero-bg.jpg" 
          alt="Crypto Background" 
          className="hero-bg-image" 
          fill 
          priority
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Paycoin <span className="gradient-text">Blockchain</span>
            </h1>
            <p className="hero-subtitle">
              Secure & Easy Way To Trade
            </p>
            <p className="hero-description">
              Join the future of digital finance with Paycoin. Experience seamless cryptocurrency trading, 
              secure transactions, and innovative blockchain technology designed for everyone.
            </p>

            <div className="hero-buttons">
              <button 
                className="btn-hero"
                onClick={() => scrollToSection('investment')}
              >
                GET STARTED
                <ArrowRight size={20} />
              </button>
              <button className="btn-hero-outline">
                WHITEPAPER
              </button>
            </div>

            <div className="hero-features">
              <div className="feature-item">
                <Shield className="feature-icon" />
                <span>Secure Trading</span>
              </div>
              <div className="feature-item">
                <Zap className="feature-icon" />
                <span>Fast Transactions</span>
              </div>
              <div className="feature-item">
                <TrendingUp className="feature-icon" />
                <span>High Returns</span>
              </div>
            </div>
          </div>

          <div className="hero-widget">
            <div className="ico-card">
              <div className="ico-header">
                <h3>Paycoin ICO:</h3>
                <div className="discount-badge">
                  Discount 33% from final price
                </div>
              </div>

              <div className="progress-section">
                <div className="progress-labels">
                  <span className="progress-raised">600K</span>
                  <span className="progress-target">5M</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
                <div className="progress-amount">1.2M USD</div>
              </div>

              <div className="token-info">
                <p>Fixed token edition 3,000,000 BITS</p>
              </div>

              <div className="countdown">
                <h4>ICO Ends In:</h4>
                <div className="countdown-timer">
                  <div className="time-unit">
                    <span className="time-value">{timeLeft.days}</span>
                    <span className="time-label">Days</span>
                  </div>
                  <div className="time-unit">
                    <span className="time-value">{timeLeft.hours}</span>
                    <span className="time-label">Hours</span>
                  </div>
                  <div className="time-unit">
                    <span className="time-value">{timeLeft.minutes}</span>
                    <span className="time-label">Min</span>
                  </div>
                  <div className="time-unit">
                    <span className="time-value">{timeLeft.seconds}</span>
                    <span className="time-label">Sec</span>
                  </div>
                </div>
              </div>

              <button className="buy-tokens-btn">
                BUY TOKENS
              </button>

              <div className="payment-methods">
                <Image src="/visa.svg" alt="Visa" width={50} height={30} />
                <Image src="/paypal.svg" alt="PayPal" width={50} height={30} />
                <Image src="/mastercard.svg" alt="Mastercard" width={50} height={30} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="floating-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>
    </section>
  );
};

export default HeroSection;
