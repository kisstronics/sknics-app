import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppCard } from '../components/AppCard';
import { knicsApps } from '../data/apps';

export function HomePage() {
  useEffect(() => {
    document.title = 'Knics';
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-atmosphere" aria-hidden="true">
          <div className="hero-orb hero-orb-a" />
          <div className="hero-orb hero-orb-b" />
          <div className="hero-grid" />
        </div>
        <div className="hero-content">
          <p className="brand-hero">Knics</p>
          <h1>Enterprise-grade products for everyday life.</h1>
          <p className="hero-lede">
            We design focused applications for families, wealth, play, and personal intelligence —
            built to feel clear on every screen.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" to="/apps">
              View products
            </Link>
            <Link className="btn secondary" to="/about">
              About Knics
            </Link>
          </div>
        </div>
      </section>

      <section className="section products-preview" id="products">
        <div className="section-head">
          <p className="eyebrow">Product suite</p>
          <h2>Four applications. One platform identity.</h2>
          <p className="section-lede">
            Open any product below. Each app is independent — Knics is the brand that connects them.
          </p>
        </div>
        <div className="app-grid">
          {knicsApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      <section className="section trust-band">
        <div className="trust-inner">
          <p className="eyebrow">How we build</p>
          <h2>Practical software. Professional delivery.</h2>
          <ul className="trust-list">
            <li>
              <strong>Mobile-first</strong>
              <span>Every product is designed for phone and desktop from day one.</span>
            </li>
            <li>
              <strong>Secure by default</strong>
              <span>Sign-in, privacy controls, and clear data practices across the suite.</span>
            </li>
            <li>
              <strong>Focused products</strong>
              <span>Each app solves one job well — family, finance, games, or intelligence.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section close-band">
        <p className="eyebrow">Start here</p>
        <h2>Choose a product and get to work.</h2>
        <p className="section-lede">
          Knics is the home for our applications. Pick what you need and continue into the product.
        </p>
        <Link className="btn primary" to="/apps">
          Browse all products
        </Link>
      </section>
    </>
  );
}
