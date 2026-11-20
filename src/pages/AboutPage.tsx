import { useEffect } from 'react';

export function AboutPage() {
  useEffect(() => {
    document.title = 'Who we are · Knics';
  }, []);

  return (
    <section className="section page-section content-page">
      <p className="eyebrow">About</p>
      <h1>Who we are</h1>
      <div className="prose-block">
        <p>
          Knics builds a focused suite of digital products — tools that help people manage family
          history, personal wealth, leisure, and everyday intelligence.
        </p>
        <p>
          We care about enterprise-quality craft: clear interfaces, reliable mobile experiences,
          and products that stay understandable as they grow.
        </p>
        <p>
          Our Roots, Between, Claw, and Fin Goat each serve a distinct job. This site is the
          brand home that brings them together.
        </p>
      </div>
    </section>
  );
}
