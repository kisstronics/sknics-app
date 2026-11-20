import { useEffect } from 'react';

export function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy · Knics';
  }, []);

  return (
    <section className="section page-section content-page">
      <p className="eyebrow">Legal</p>
      <h1>Privacy</h1>
      <div className="prose-block">
        <p>
          Knics products use account information only to sign you in and operate the features you
          use. Product-specific data stays within that application.
        </p>
        <p>
          We do not sell personal data. You can sign out of any Knics product at any time. For
          privacy questions or data requests, use Contact us.
        </p>
      </div>
    </section>
  );
}
