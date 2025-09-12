"use client";

import Image from "next/image";
import "./CryptoLandSection.css";

export default function CryptoLandSection() {
  return (
    <section className="crypto-section">
      <div className="crypto-container">
        {/* Left Content */}
        <div className="crypto-text">
          <p className="crypto-subtitle">PAYCOIN DASHBOARD</p>
          <h2 className="crypto-title">Experience the Power of the Paycoin Dashboard</h2>
          <p className="crypto-description">
            The Paycoin Dashboard is designed to give users a clear, effective,
            and powerful way to manage cryptocurrency investments. With
            AI-driven insights, it helps traders make smarter decisions,
            automate strategies, and maximize returns while staying ahead of
            market trends.
          </p>
          <a
            href="https://paycoin-dashboard.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="crypto-button"
          >
            Create Dashboard
          </a>
        </div>

        {/* Right Content */}
        <div className="crypto-image">
          <Image
            src="/wunnagnna.png"
            alt="Paycoin Dashboard Preview"
            width={600}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
}
