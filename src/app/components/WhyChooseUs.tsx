import { Shield, Zap, Users, Award, Globe, TrendingUp, Clock, Lock } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'Advanced encryption and multi-layered security protocols protect your assets with institutional-grade protection.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Transactions',
      description: 'Experience near-instant transactions with our optimized blockchain infrastructure and advanced routing technology.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Consistent High Returns',
      description: 'Our AI-powered trading algorithms and expert strategies deliver consistently profitable returns for our investors.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: '24/7 Expert Support',
      description: 'Access round-the-clock support from our team of crypto experts and dedicated account managers.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Trade and invest from anywhere in the world with our platform available in 120+ countries.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Trusted by millions and recognized as a leading platform in the cryptocurrency and blockchain space.',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Lock,
      title: 'Regulatory Compliance',
      description: 'Fully compliant with international financial regulations and standards for maximum user protection.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Real-Time Analytics',
      description: 'Access comprehensive real-time market data, analytics, and insights to make informed investment decisions.',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section id="features" className="why-choose-section">
      <div className="why-choose-container">
        <div className="section-header">
          <div className="section-badge">
            Why Choose Paycoin
          </div>
          <h2 className="section-title">
            The <span className="gradient-text">Smart Choice</span> for Crypto Trading
          </h2>
          <p className="section-description">
            Discover why millions of traders and investors trust Paycoin for their cryptocurrency 
            trading and investment needs. Our platform combines cutting-edge technology with 
            unmatched security and support.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" data-index={index}>
              <div className="feature-icon-wrapper">
                <feature.icon className="feature-icon" />
                <div className="icon-glow"></div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              <div className="feature-hover-effect"></div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Start Trading?</h3>
            <p className="cta-description">
              Join thousands of successful traders and start your crypto journey today.
            </p>
            <button
              className="cta-button"
              onClick={() => window.location.href = "https://paycoin-dashboard.netlify.app"}
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
