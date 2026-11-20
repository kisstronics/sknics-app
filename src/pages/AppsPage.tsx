import { useEffect } from 'react';
import { AppCard } from '../components/AppCard';
import { knicsApps } from '../data/apps';

export function AppsPage() {
  useEffect(() => {
    document.title = 'Products · Knics';
  }, []);

  return (
    <section className="section page-section">
      <div className="section-head">
        <p className="eyebrow">Products</p>
        <h1>The Knics application suite</h1>
        <p className="section-lede">
          Navigate to any of the four Knics applications. Links open the live product experience.
        </p>
      </div>
      <div className="app-grid app-grid-wide">
        {knicsApps.map((app) => (
          <AppCard key={app.id} app={app} featured />
        ))}
      </div>
    </section>
  );
}
