import { Check, TrendingUp, DollarSign, Clock } from "lucide-react";
import "./InvestmentPlans.css";

const InvestmentPlans = () => {
  const plans = [
    {
      name: "Basic",
      minInvestment: "$1,000 - $9,999",
      roi: "5-7% Weekly",
      duration: "4 Weeks",
      totalReturn: "40%",
      features: [
        "24/7 Customer Support",
        "Secure Wallet Integration",
        "Real-time Portfolio Tracking",
      ],
      popular: false,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Professional Plan",
      minInvestment: "$11,000- $49,999",
      roi: "8-10% Weekly",
      duration: "6 Weeks",
      totalReturn: "72%",
      features: [
        "Priority Customer Support",
        "Advanced Analytics Dashboard",
        "Market Insights & Reports",
        "Dedicated Account Manager",
        "Early Access to New Features",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Enterprise Plan",
      minInvestment: "$50,000- $99,999",
      roi: "15% Weekly",
      duration: "8 Weeks",
      totalReturn: "120%",
      features: [
        "VIP Customer Support",
        "Custom Trading Strategies",
        "Direct Market Access",
        "Personal Investment Advisor",
        "Exclusive Investment Opportunities",
        "Risk Management Tools",
      ],
      popular: false,
      color: "from-gold-500 to-yellow-500",
    },
    {
      name: "Enterprise Plan",
      minInvestment: "$99,999- $149,999",
      roi: "15% Weekly",
      duration: "8 Weeks",
      totalReturn: "120%",
      features: [
        "VIP Customer Support",
        "Custom Trading Strategies",
        "Direct Market Access",
        "Personal Investment Advisor",
        "Exclusive Investment Opportunities",
        "Risk Management Tools",
      ],
      popular: false,
      color: "from-gold-500 to-yellow-500",
    },
  ];

  return (
    <section id="investment" className="investment-section">
      <div className="investment-container">
        <div className="section-header">
          <h2 className="section-title">
            Investment <span className="gradient-text">Plans</span>
          </h2>
          <p className="section-description">
            Choose the perfect investment plan that matches your financial goals.
            All plans offer competitive returns with transparent fee structures.
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`plan-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}

              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-investment">
                  <span className="investment-amount">
                    {plan.minInvestment}
                  </span>
                  <span className="investment-label">Minimum Investment</span>
                </div>
              </div>

              <div className="plan-stats">
                <div className="stat-item">
                  <TrendingUp className="stat-icon" />
                  <div className="stat-content">
                    <span className="stat-value">{plan.roi}</span>
                    <span className="stat-label">Return Rate</span>
                  </div>
                </div>
                <div className="stat-item">
                  <Clock className="stat-icon" />
                  <div className="stat-content">
                    <span className="stat-value">{plan.duration}</span>
                    <span className="stat-label">Duration</span>
                  </div>
                </div>
                <div className="stat-item">
                  <DollarSign className="stat-icon" />
                  <div className="stat-content">
                    <span className="stat-value">{plan.totalReturn}</span>
                    <span className="stat-label">Total Return</span>
                  </div>
                </div>
              </div>

              <div className="plan-features">
                <h4>Plan Features:</h4>
                <ul className="features-list">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <Check className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Start Investing Link */}
              <a
                href="https://paycoin-dashboard.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`plan-button ${
                  plan.popular ? "popular-button" : ""
                }`}
              >
                Start Investing
              </a>
            </div>
          ))}
        </div>

        <div className="investment-info">
          <div className="info-card">
            <h4>How It Works</h4>
            <p>
              Our investment plans are designed to provide consistent returns
              through our advanced trading algorithms and market expertise. All
              investments are secured with institutional-grade security
              measures.
            </p>
          </div>
          <div className="info-card">
            <h4>Risk Management</h4>
            <p>
              We employ sophisticated risk management strategies to protect your
              investments. Our diversified portfolio approach minimizes exposure
              while maximizing potential returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;
