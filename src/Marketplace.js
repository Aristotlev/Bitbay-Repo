import React from 'react';
import Squares from './Squares';
import './App.css';

function Marketplace() {
  return (
    <div className="App">
      {/* Animated Background */}
      <div className="background-container">
        <Squares 
          speed={0.6} 
          squareSize={50}
          direction='right'
          borderColor='rgba(125, 249, 255, 0.4)'
          hoverFillColor='rgba(79, 70, 229, 0.15)'
        />
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Header */}
        <header className="header">
          <div className="container">
            <div className="logo">
              <a href="/" style={{ textDecoration: 'none' }}>
                <h1>BitBay</h1>
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">The Future of Free Markets</h1>
              <h2 className="hero-subtitle">DECENTRALIZED MARKETPLACE POWERED BY UNBREAKABLE SMART CONTRACTS</h2>
              <p className="hero-description">
                BitBay is a suite of free-to-use, multi-platform applications including the
                world's first fully-functional Decentralized Marketplace. Powered by Unbreakable Smart Contracts and a Proof of Stake 3.0 cryptocurrency, BitBay enables you to buy and sell goods and services securely without the need for middlemen.
              </p>
              <div className="hero-buttons">
                <a href="https://app.bitbay.market/" className="btn btn-primary">Visit Web Marketplace</a>
                <a href="https://www.youtube.com/embed/fge5inFWlkc" className="btn btn-secondary">Watch the Video</a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="features">
          <div className="container">
            <div className="feature">
              <h3>Redefining Global Trade</h3>
              <p>
                The BitBay marketplace uses Unbreakable Smart Contracts, also known as Double-Deposit Escrow, ensuring no one profits from dishonest behavior. This revolutionary system creates perfect economic incentives where both buyers and sellers are motivated to complete transactions honestly.
              </p>
              <p className="feature-tagline">Fraud becomes mathematically impossible</p>
            </div>

            <div className="feature">
              <h3>Complete Freedom</h3>
              <p>
                Say goodbye to the old way of doing ecommerce. You can buy and sell anything with no fees using a completely free technology. No intermediaries, no censorship, no geographical restrictions - just pure peer-to-peer commerce.
              </p>
              <p className="feature-tagline">True peer-to-peer marketplace</p>
            </div>

            <div className="feature">
              <h3>Tried and Tested</h3>
              <p>
                $BAY is the most functional cryptocurrency in the industry and has been in constant development since 2014. The marketplace has been fully operational since 2015, with thousands of successful transactions completed using our Double Deposit Escrow system.
              </p>
              <p className="feature-tagline">8+ years of proven technology</p>
            </div>

            <div className="feature">
              <h3>Safe and Secure</h3>
              <p>
                Security is at the core of what we do. Featuring our industry-renowned virtually unhackable multisignature Wallet, built-in Smart Contracts, Encrypted Communication, Decentralized Hosting, Anti-Keylogger, Steganography and Cold Staking.
              </p>
              <p className="feature-tagline">Military-grade security protocols</p>
            </div>
          </div>
        </section>

        {/* Marketplace Features Section */}
        <section className="features">
          <div className="container">
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: '#7df9ff', textShadow: '0 0 20px rgba(125, 249, 255, 0.5)' }}>
              Marketplace Capabilities
            </h2>
            
            <div className="feature">
              <h3>Unbreakable Smart Contracts</h3>
              <p>
                Revolutionary double deposit escrow system where both parties put money at stake. This creates perfect game theory where honesty is always the most profitable strategy. No middlemen, no escrow fees, no possibility of fraud.
              </p>
            </div>

            <div className="feature">
              <h3>Decentralized Architecture</h3>
              <p>
                The marketplace runs entirely peer-to-peer with no central servers. This means no downtime, no censorship, and no single point of failure. Your trades are hosted across the entire network, making them unstoppable.
              </p>
            </div>

            <div className="feature">
              <h3>Multi-Platform Access</h3>
              <p>
                Access the marketplace through our desktop client for full functionality, or use the web marketplace for quick trades. Available on Windows, Linux, and through any web browser with full feature parity.
              </p>
            </div>

            <div className="feature">
              <h3>Global Commerce</h3>
              <p>
                Trade with anyone, anywhere in the world without restrictions. No geographical limits, no payment processor restrictions, no account freezes. True global commerce powered by cryptocurrency and smart contracts.
              </p>
            </div>

            <div className="feature">
              <h3>Encrypted Communications</h3>
              <p>
                All marketplace communications are end-to-end encrypted. Negotiate deals, share shipping information, and coordinate transactions with complete privacy and security built into every interaction.
              </p>
            </div>

            <div className="feature">
              <h3>Dynamic Templates</h3>
              <p>
                Choose from various marketplace templates: standard buying/selling, auctions, reverse auctions, bartering, employment contracts, and custom smart contract scenarios. Each template is optimized for specific use cases.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta">
          <div className="container">
            <h3>Ready to start trading?</h3>
            <p>
              Join the revolution in decentralized commerce. Download the BitBay client to access the full marketplace, or try the web version for quick trades. Experience the future of free markets today.
            </p>
            <div className="cta-buttons">
              <a href="/downloads" className="btn btn-primary">Download BitBay Client</a>
              <a href="https://app.bitbay.market/" className="btn btn-secondary">Try Web Marketplace</a>
              <a href="/features" className="btn btn-outline">Explore All Features</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="/features">Features</a></li>
                  <li><a href="/downloads">Downloads</a></li>
                  <li><a href="/marketplace">BitBay Marketplace</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Support</h4>
                <ul>
                  <li><a href="https://www.youtube.com/watch?v=CIU4s2G8jU8&list=PL4MGGKJn4DizGw7oBXwzETMVLNCZ6G2_t">Tutorial Videos</a></li>
                  <li><a href="https://t.me/bitbayofficial">Community</a></li>
                  <li><a href="https://bitbay.market/blog/index.html">Blog</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Marketplace Access</h4>
                <ul>
                  <li><a href="https://app.bitbay.market/">Web Marketplace</a></li>
                  <li><a href="/downloads">Desktop Client</a></li>
                  <li><a href="https://bitbay.market/smart-contracts/index.html">Smart Contracts Info</a></li>
                  <li><a href="https://bitbay.market/double-deposit-escrow/index.html">Double Deposit Guide</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>©Copyright 2025 BitBay. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Marketplace;
