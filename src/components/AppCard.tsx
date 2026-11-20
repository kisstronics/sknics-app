import type { CSSProperties } from 'react';
import type { KnicsApp } from '../data/apps';

export function AppCard({ app, featured = false }: { app: KnicsApp; featured?: boolean }) {
  return (
    <a
      className={`app-tile${featured ? ' is-featured' : ''}`}
      href={app.href}
      target="_blank"
      rel="noreferrer noopener"
      style={{ '--tile-accent': app.accent } as CSSProperties}
    >
      <div className="app-tile-top">
        <span className="app-category">{app.category}</span>
        <span className={`app-status status-${app.status}`}>
          {app.status === 'live' ? 'Live' : 'In build'}
        </span>
      </div>
      <h3 className="app-name">{app.name}</h3>
      <p className="app-tagline">{app.tagline}</p>
      <p className="app-desc">{app.description}</p>
      <span className="app-cta">
        Open {app.name}
        <span aria-hidden="true"> →</span>
      </span>
    </a>
  );
}
