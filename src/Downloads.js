import React from 'react';
import Squares from './Squares';
import './App.css';

function Downloads() {
  return (
    <div className="App">
      {/* Animated Background */}
      <div className="background-container">
        <Squares 
          speed={0.4} 
          squareSize={45}
          direction='left'
          borderColor='rgba(6, 182, 212, 0.3)'
          hoverFillColor='rgba(79, 70, 229, 0.1)'
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
              <h1 className="hero-title">BitBay Downloads</h1>
              <h2 className="hero-subtitle">EVERYTHING YOU NEED TO GET STARTED WITH BITBAY</h2>
              <p className="hero-description">
                Welcome to our BitBay downloads page! From technical whitepapers to our
                feature-rich Market's Client, you can find everything you need below to get started with BitBay.
              </p>
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="features">
          <div className="container">
            <div className="feature download-feature">
              <h3>BitBay Marketplace Client</h3>
              <p>
                With a built-in wallet, decentralized marketplaces and some of the most advanced
                security in crypto, we recommend the BitBay Client to send, store and stake your $BAY.
              </p>
              <p>
                <strong>Features included:</strong>
              </p>
              <ul style={{ color: '#cbd5e1', marginBottom: '20px', paddingLeft: '20px' }}>
                <li>Complete cryptocurrency wallet</li>
                <li>Decentralized marketplace access</li>
                <li>Smart contract creation tools</li>
                <li>Double deposit escrow system</li>
                <li>Advanced security features</li>
                <li>Staking capabilities</li>
              </ul>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <a href="https://bithalo.github.io/bithalo/downloads/BitBayWin.html" className="btn btn-primary">
                  Windows Client | 4.12
                </a>
                <a href="https://bithalo.github.io/bithalo/downloads/BitBayLinux.html" className="btn btn-primary">
                  Linux Client | 4.12
                </a>
                <a href="https://bitbay.market/downloads/index.html" className="btn btn-outline">
                  View All Downloads
                </a>
              </div>
            </div>

            <div className="feature download-feature">
              <h3>BitBay Qt Wallets</h3>
              <p>
                With encryption and staking options, BitBay's QT wallet is a quick and easy way
                to store your BAY. Perfect for users who need basic wallet functionality without the full marketplace features.
              </p>
              <p>
                <strong>Wallet features:</strong>
              </p>
              <ul style={{ color: '#cbd5e1', marginBottom: '20px', paddingLeft: '20px' }}>
                <li>Secure BAY storage</li>
                <li>Send and receive transactions</li>
                <li>Wallet encryption</li>
                <li>Staking rewards</li>
                <li>Lightweight and fast</li>
              </ul>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <a href="https://bitbay.market/downloads/index.html" className="btn btn-secondary">
                  Download Qt Wallet
                </a>
              </div>
            </div>

            <div className="feature download-feature">
              <h3>BitBay Mobile Wallet Apps</h3>
              <p>
                The BitBay Mobile Wallet enables users to send, receive and store their $BAY
                coins on their mobile device. Take your cryptocurrency with you wherever you go.
              </p>
              <p>
                <strong>Mobile features:</strong>
              </p>
              <ul style={{ color: '#cbd5e1', marginBottom: '20px', paddingLeft: '20px' }}>
                <li>Send/receive BAY on the go</li>
                <li>Secure mobile storage</li>
                <li>QR code scanning</li>
                <li>Transaction history</li>
                <li>Biometric security</li>
              </ul>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <a href="https://bitbay.market/downloads/index.html" className="btn btn-secondary">
                  iOS App
                </a>
                <a href="https://bitbay.market/downloads/index.html" className="btn btn-secondary">
                  Android App
                </a>
              </div>
            </div>

            <div className="feature download-feature">
              <h3>Web Wallet</h3>
              <p>
                Access your BitBay wallet directly from your browser. No downloads required - just secure, instant access to your BAY tokens through our web interface.
              </p>
              <p>
                <strong>Web wallet benefits:</strong>
              </p>
              <ul style={{ color: '#cbd5e1', marginBottom: '20px', paddingLeft: '20px' }}>
                <li>No installation required</li>
                <li>Access from any device</li>
                <li>Secure browser-based transactions</li>
                <li>Quick and easy setup</li>
              </ul>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <a href="https://wallet.bitbay.market/" className="btn btn-primary">
                  Open Web Wallet
                </a>
              </div>
            </div>

            <div className="feature download-feature">
              <h3>Source Code</h3>
              <p>
                To maintain transparency, we invite you to personally review BitBay's open
                source code. Examine the technology behind our innovative features and contribute to the project.
              </p>
              <p>
                <strong>Open source benefits:</strong>
              </p>
              <ul style={{ color: '#cbd5e1', marginBottom: '20px', paddingLeft: '20px' }}>
                <li>Complete transparency</li>
                <li>Community contributions</li>
                <li>Security auditing</li>
                <li>Educational resource</li>
                <li>Development participation</li>
              </ul>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <a href="https://github.com/bitbaymarket" className="btn btn-outline">
                  View on GitHub
                </a>
              </div>
            </div>

            <div className="feature download-feature">
              <h3>BitBay Whitepapers</h3>
              <p>
                Technical explanations revealing the what, why and how behind BitBay's entire
                ecosystem. Deep dive into the mathematics and cryptography that powers our innovations.
              </p>
              <p>
                <strong>Documentation includes:</strong>
              </p>
              <ul style={{ color: '#cbd5e1', marginBottom: '20px', paddingLeft: '20px' }}>
                <li>Dynamic Peg technical specifications</li>
                <li>Double deposit escrow mathematics</li>
                <li>Smart contract implementation</li>
                <li>Decentralized marketplace architecture</li>
                <li>Security protocols and cryptography</li>
              </ul>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <a href="https://bit.ly/2mKJUMp" className="btn btn-primary">
                  Main Whitepaper
                </a>
                <a href="https://bitbay.market/downloads/bitbay-dynamic-peg-intro.pdf" className="btn btn-outline">
                  Dynamic Peg Guide
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="cta">
          <div className="container">
            <h3>System Requirements</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '30px', borderRadius: '16px', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
                <h4 style={{ color: '#06b6d4', marginBottom: '15px' }}>Windows</h4>
                <ul style={{ color: '#cbd5e1', listStyle: 'none', padding: 0 }}>
                  <li>• Windows 7 or later</li>
                  <li>• 2GB RAM minimum</li>
                  <li>• 10GB free disk space</li>
                  <li>• Internet connection</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '30px', borderRadius: '16px', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
                <h4 style={{ color: '#06b6d4', marginBottom: '15px' }}>Linux</h4>
                <ul style={{ color: '#cbd5e1', listStyle: 'none', padding: 0 }}>
                  <li>• Ubuntu 16.04 or equivalent</li>
                  <li>• 2GB RAM minimum</li>
                  <li>• 10GB free disk space</li>
                  <li>• Internet connection</li>
                </ul>
              </div>
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
                <h4>Get some $BAY</h4>
                <p>You can buy Bay at these exchanges</p>
                <div className="exchange-links">
                  <a href="https://my.nighttrader.exchange/">NightTrader</a>
                  <a href="https://bitbaymarket.github.io/bridge/">BitBay Bridge</a>
                </div>
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

export default Downloads;
