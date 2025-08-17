import { Star, Quote } from "lucide-react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Investment Advisor",
      company: "Goldman Sachs",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b9c84e6e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Paycoin has revolutionized my approach to cryptocurrency trading. The 10% weekly returns have been consistent, and their security measures give me complete peace of mind. I've recommended it to all my clients.",
    },
    {
      name: "Michael Chen",
      role: "Blockchain Developer",
      company: "Microsoft",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "As someone deeply involved in blockchain technology, I can confidently say Paycoin's infrastructure is top-notch. The AI-powered trading algorithms are incredibly sophisticated and deliver exceptional results.",
    },
    {
      name: "Emily Rodriguez",
      role: "Portfolio Manager",
      company: "Fidelity Investments",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "I've been investing with Paycoin for 8 months now, and the returns have exceeded all my expectations. The platform is user-friendly, and their customer support is outstanding. Highly recommended!",
    },
    {
      name: "David Thompson",
      role: "Financial Analyst",
      company: "JP Morgan",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Paycoin's transparent approach and consistent performance have made it my go-to platform for crypto investments. The weekly 10% ROI has been a game-changer for my portfolio diversification strategy.",
    },
    {
      name: "Lisa Wang",
      role: "Crypto Trader",
      company: "Independent",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "After trying multiple platforms, Paycoin stands out for its reliability and profitability. The risk management tools are excellent, and I love the real-time analytics dashboard.",
    },
    {
      name: "Robert Martinez",
      role: "Investment Banker",
      company: "Morgan Stanley",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Paycoin has transformed my perspective on cryptocurrency investments. The institutional-grade security and consistent returns make it perfect for both individual and corporate portfolios.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <div className="section-badge">Client Testimonials</div>
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="section-description">
            Discover why thousands of investors trust Paycoin with their
            cryptocurrency trading and investment needs. Read real testimonials
            from our satisfied clients.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <Quote className="quote-icon" />
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="star-icon filled" />
                  ))}
                </div>
              </div>

              <div className="testimonial-content">
                <p className="testimonial-text">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>

              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>

              <div className="testimonial-glow"></div>
            </div>
          ))}
        </div>

        <div className="testimonials-stats">
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.9/5</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">$2B+</span>
            <span className="stat-label">Assets Managed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
