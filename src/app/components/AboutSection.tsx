import { Shield, Users, Globe, Award, Zap, TrendingUp } from "lucide-react";
import "./AboutSection.css";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "50K+", label: "Active Users" },
    { icon: Globe, value: "120+", label: "Countries" },
    { icon: Award, value: "99.9%", label: "Uptime" },
    { icon: Shield, value: "$2B+", label: "Secured Assets" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description:
        "Advanced encryption and multi-layer security protocols protect your investments 24/7.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Execute trades and transactions in milliseconds with our optimized blockchain infrastructure.",
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Trading",
      description:
        "Our advanced AI algorithms analyze market trends to maximize your returns.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-badge">About Paycoin</div>
            <h2 className="about-title">
              Revolutionizing Digital <span className="gradient-text">Finance</span>
            </h2>
            <p className="about-description">
              Paycoin is at the forefront of blockchain innovation, providing secure,
              fast, and reliable cryptocurrency trading solutions. Our platform combines
              cutting-edge technology with user-friendly design to make digital finance
              accessible to everyone.
            </p>
            <p className="about-description">
              Founded by industry experts with decades of experience in finance and
              technology, we&apos;re committed to building the future of digital assets
              and empowering individuals to take control of their financial destiny.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <stat.icon className="stat-icon" />
                  <div className="stat-content">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual">
            <div className="floating-cards">
              <div className="floating-card card-1">
                <div className="card-icon">
                  <Shield size={32} />
                </div>
                <h4>Secure</h4>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">
                  <Zap size={32} />
                </div>
                <h4>Fast</h4>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">
                  <TrendingUp size={32} />
                </div>
                <h4>Profitable</h4>
              </div>
            </div>

            <div className="pulse-circle">
              <div className="inner-circle">
                <div className="logo-circle">P</div>
              </div>
            </div>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                <feature.icon className="feature-icon" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
