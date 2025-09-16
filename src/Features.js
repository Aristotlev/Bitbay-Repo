import React from 'react';
import Squares from './Squares';
import './App.css';

function Features() {
  return (
    <div className="App">
      {/* Animated Background */}
      <div className="background-container">
        <Squares 
          speed={0.3} 
          squareSize={35}
          direction='up'
          borderColor='rgba(79, 70, 229, 0.3)'
          hoverFillColor='rgba(6, 182, 212, 0.1)'
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
              <h1 className="hero-title">BitBay Features</h1>
              <h2 className="hero-subtitle">INNOVATIVE TECHNOLOGICAL FEATURES FOR MAXIMUM SECURITY</h2>
              <p className="hero-description">
                BitBay utilizes innovative technological features to guarantee the maximum
                security in all your transactions. Learn more about the main features that will support and simplify your trades online.
              </p>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="features">
          <div className="container">
            <div className="feature">
              <h3>Dynamic Peg</h3>
              <p>
                A decentralized solution to provide price stability by eliminating high
                volatility in cryptocurrency. The world's first truly adaptable currency that adjusts supply based on market demand through democratic voting.
              </p>
              <p className="feature-tagline">Revolutionary price stability mechanism</p>
            </div>

            <div className="feature">
              <h3>Unbreakable Contracts</h3>
              <p>
                The solution against fraudsters with no middlemen or escrow fees. Smart contracts that are mathematically enforced, making fraud impossible through cryptographic guarantees and economic incentives.
              </p>
              <p className="feature-tagline">Zero-trust transaction security</p>
            </div>

            <div className="feature">
              <h3>Double Deposit Escrow</h3>
              <p>
                Both 'buyer' and 'seller' make a deposit to seal an equal commitment, making
                frauds impossible. This revolutionary system ensures that both parties have skin in the game, creating perfect economic incentives for honest behavior.
              </p>
              <p className="feature-tagline">Game theory meets cryptocurrency</p>
            </div>

            <div className="feature">
              <h3>Decentralized Markets</h3>
              <p>
                Start your own market, peer to peer and completely serverless. Create and manage marketplaces without any central authority, hosted entirely on the blockchain with full decentralization.
              </p>
              <p className="feature-tagline">True peer-to-peer commerce</p>
            </div>

            <div className="feature">
              <h3>Advanced Security Features</h3>
              <p>
                <strong>Multisignature Wallets:</strong> Two different cryptographic passwords to make your wallet virtually unhackable.
              </p>
              <p>
                <strong>Tor and Proxy Options:</strong> BitBay's privacy options guarantee the highest security for all users with built-in anonymity features.
              </p>
              <p className="feature-tagline">Military-grade security protocols</p>
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="features">
          <div className="container">
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: '#06b6d4', textShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}>
              Marketplace Templates
            </h2>
            
            <div className="feature">
              <h3>Cash for Coins</h3>
              <p>
                Buy/sell any cryptocurrency or fiat directly peer-to-peer - without the need for
                a centralized exchange. Trade safely with strangers using double deposit escrow protection.
              </p>
            </div>

            <div className="feature">
              <h3>Hire Someone / Find a Job</h3>
              <p>
                Enforced accountability for both employers and employees with Double Deposit
                Escrow. Create trustless employment contracts where both parties are incentivized to fulfill their obligations.
              </p>
            </div>

            <div className="feature">
              <h3>Auctions / Reverse Auctions</h3>
              <p>
                Buyers competitively bid to purchase an item/service, and sellers competitively
                bid to sell an item/service. Fully decentralized auction system with smart contract enforcement.
              </p>
            </div>

            <div className="feature">
              <h3>Barter System</h3>
              <p>
                Trade any goods or services securely with double deposit escrow. No payment
                needed! Exchange value directly without monetary transactions while maintaining security.
              </p>
            </div>

            <div className="feature">
              <h3>Decentralized Voting</h3>
              <p>
                Completely trustless voting with custom staking and donation options. Create transparent, tamper-proof voting systems for any organization or community.
              </p>
            </div>

            <div className="feature">
              <h3>Exotic Spending</h3>
              <p>
                Make time-based contracts (freezes, switches and atomic trades) with ease. Advanced smart contract capabilities for complex financial instruments and agreements.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta">
          <div className="container">
            <h3>Ready to experience the future?</h3>
            <p>
              Want to see everything our advanced client can do? Take a look at our Wall of Features for a comprehensive overview of all capabilities.
            </p>
            <div className="cta-buttons">
              <a href="https://bitbay.market/wall-of-features/index.html" className="btn btn-primary">View Wall of Features</a>
              <a href="/downloads" className="btn btn-secondary">Download Client</a>
              <a href="https://bitbay.market/roadmap/index.html" className="btn btn-outline">View Roadmap</a>
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
                <h4>Technical Resources</h4>
                <ul>
                  <li><a href="https://bit.ly/2mKJUMp">Whitepaper</a></li>
                  <li><a href="https://bitbay.market/wall-of-features/index.html">Wall of Features</a></li>
                  <li><a href="https://bitbay.market/roadmap/index.html">Roadmap</a></li>
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

export default Features;
