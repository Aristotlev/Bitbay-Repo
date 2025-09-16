import React from 'react';
import Squares from './Squares';
import './App.css';

function Home() {
  return (
    <div className="App">
      {/* Animated Background */}
      <div className="background-container">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal'
          borderColor='#fff'
          hoverFillColor='#222'
        />
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Header */}
        <header className="header">
          <div className="container">
            <div className="logo">
              <h1>BitBay</h1>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">BitBay's Dynamic Peg</h1>
              <h2 className="hero-subtitle">THE WORLD'S FIRST DECENTRALISED CURRENCY DESIGNED FOR MASS ADOPTION</h2>
              <p className="hero-description">
                With its unique system of adaptive supply control, BitBay is creating a reliable
                currency that is truly independent. The revolutionary 'Dynamic Peg' creates both a store of value and a medium of exchange.
              </p>
              <div className="hero-buttons">
                <a href="https://my.nighttrader.exchange/markets/BAY-BTC" className="btn btn-primary">Buy BitBay</a>
                <a href="https://www.youtube.com/embed/fge5inFWlkc" className="btn btn-secondary">Watch the Video</a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <div className="container">
            <div className="feature">
              <h3>The democratic control of supply</h3>
              <p>
                Every price is determined where supply meets demand. As demand constantly
                changes, we must control the supply to counteract that movement. BitBay's Dynamic Peg
                is purely decentralized, allowing every participant to vote on which direction
                the price may go. When the users collectively decide upon a price, the currency
                can then be trusted for use within BitBay's double deposit escrow contracts.
              </p>
              <p className="feature-tagline">This is the definition of a truly adaptable currency.</p>
            </div>

            <div className="feature">
              <h3>A brand new method of decentralized currency management</h3>
              <p>
                Every user has two balances of $BAY, liquid and reserve. During a price crash, stakers can collectively vote to "freeze" a portion of
                the entire liquid supply. This decreases the supply and may increase the price of everyone's remaining liquid coins. The reserve coins can also be moved with
                a time delay similar to a bond which opens the door to a plethora of investment
                vehicles.
              </p>
              <p>
                During a price pump, stakers can vote to "unfreeze" a portion of the entire
                reserve supply. This increases the supply and may reduce volatility of everyone's liquid coins. Holders of the reserve coins may see a portion
                become liquid and can benefit from the conversion. The end result is a coin supply
                that elegantly adapts to current demand, no matter how much that demand changes.
              </p>
            </div>

            <div className="feature">
              <h3>Don't want to vote? We have you covered</h3>
              <p>
                Using our tried and tested algorithm, each vote can also be algorithmically
                automated depending on user preference.
              </p>
              <a href="https://bit.ly/2mKJUMp" className="btn btn-outline">Read the Whitepaper</a>
            </div>

            <div className="feature">
              <h3>Out with the old, in with the new</h3>
              <p>
                Historically, centralized and fixed fiat pegs tend to crumble under the pressure
                of volatility. By design, our dynamic peg requires no single entity to manage
                the supply of $BAY. BitBay's democratic voting system allows for maximum
                resilience and elasticity during extreme volatility.
              </p>
            </div>

            <div className="feature">
              <h3>Paving the way for organic growth</h3>
              <p>
                BitBay's ecosystem requires a decentralized and adaptable cryptocurrency in
                order to thrive. This is now possible, as the dynamic peg eliminates manipulation
                from Bitcoin volatility, whales, governments, and even trigger bots. It makes room
                for adoption, and creates long-term, steady growth. When compared to an
                ever-growing list of coins, BitBay's Dynamic Peg is unlike any other.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta">
          <div className="container">
            <h3>Let's get started today</h3>
            <p>
              With a built-in wallet, decentralized marketplaces and some of the most advanced
              security in crypto, we recommend the BitBay Client to send, store and stake
              your $Bay.
            </p>
            <div className="cta-buttons">
              <a href="https://bithalo.github.io/bithalo/downloads/BitBayWin.html" className="btn btn-primary">Client | 4.12 (Windows)</a>
              <a href="https://bithalo.github.io/bithalo/downloads/BitBayLinux.html" className="btn btn-primary">Client | 4.12 (Linux)</a>
              <a href="/downloads" className="btn btn-outline">View all downloads</a>
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

export default Home;
