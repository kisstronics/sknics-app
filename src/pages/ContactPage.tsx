import { useEffect } from 'react';

export function ContactPage() {
  useEffect(() => {
    document.title = 'Contact · Knics';
  }, []);

  return (
    <section className="section page-section content-page">
      <p className="eyebrow">Support</p>
      <h1>Contact us</h1>
      <div className="prose-block">
        <p>Questions about Knics products, partnerships, or privacy requests?</p>
        <p>
          Email us at{' '}
          <a className="accent-link" href="mailto:hello@knics.app">
            hello@knics.app
          </a>{' '}
          and we will get back to you as soon as we can.
        </p>
      </div>
    </section>
  );
}
