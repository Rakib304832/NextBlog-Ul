"use client";

import { useMemo, useState, type FormEvent } from "react";
import { articles, categories, type Article } from "@/data/blog";

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="icon">
      {diagonal ? <path d="M5 15 15 5M6 5h9v9" /> : <path d="M3.5 10h12m-5-5 5 5-5 5" />}
    </svg>
  );
}

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Margins home">
      <span className="brand-mark">m<span>.</span></span>
      <span className="brand-name">margins</span>
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#stories">Stories</a>
          <a href="#about">About</a>
          <a href="#newsletter">Newsletter</a>
        </nav>
        <a className="header-cta" href="#newsletter">Get the Sunday note <ArrowIcon diagonal /></a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <span className="eyebrow"><span className="eyebrow-dot" /> A journal for the curious</span>
        <h1 id="hero-title">Ideas worth<br />making <em>room</em> for.</h1>
        <p className="hero-description">A thoughtful little corner for stories on design, culture, and the art of living well. Take what you need. Stay awhile.</p>
        <a className="button button-dark" href="#stories">Explore the journal <ArrowIcon /></a>
        <div className="reader-note">
          <div className="avatar-stack" aria-hidden="true"><span>J</span><span>A</span><span>M</span><span>+</span></div>
          <p>Read slowly, with <strong>2,400+ curious people.</strong></p>
        </div>
      </div>
      <div className="hero-art">
        <div className="hero-image" role="img" aria-label="Warm sunlight falling across a peaceful interior" />
        <div className="image-caption"><span>On creating space for what matters</span><span>01 — 06</span></div>
        <div className="hero-stamp"><span>READ</span><span>WITH</span><span>INTENTION</span><b>✳</b></div>
        <span className="hero-scribble" aria-hidden="true">a little more room ↗</span>
      </div>
    </section>
  );
}

function SectionHeading({ kicker, title, note }: { kicker: string; title: string; note?: string }) {
  return (
    <div className="section-heading">
      <div><span className="section-kicker">{kicker}</span><h2>{title}</h2></div>
      {note && <p>{note}</p>}
    </div>
  );
}

function FeaturedStory({ article }: { article: Article }) {
  return (
    <article className="featured-story">
      <a className="featured-image" href="#newsletter" style={{ backgroundImage: `url("${article.image}")` }} aria-label={article.imageAlt}>
        <span className="image-label">The long read <span>↗</span></span>
      </a>
      <div className="featured-copy">
        <div className="story-meta"><span>{article.category}</span><i />{article.date}<i />{article.readTime}</div>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <a className="text-link" href="#newsletter">Read the story <ArrowIcon /></a>
      </div>
    </article>
  );
}

function StoryCard({ article, index }: { article: Article; index: number }) {
  return (
    <article className="story-card">
      <a className={`card-image card-image-${index + 1}`} href="#newsletter" style={{ backgroundImage: `url("${article.image}")` }} aria-label={article.imageAlt}>
        <span className="card-category">{article.category}</span>
        <span className="card-image-arrow"><ArrowIcon diagonal /></span>
      </a>
      <div className="card-copy">
        <div className="story-meta">{article.date}<i />{article.readTime}</div>
        <h3><a href="#newsletter">{article.title}</a></h3>
        <p>{article.excerpt}</p>
      </div>
    </article>
  );
}

function Stories() {
  const [activeCategory, setActiveCategory] = useState("All stories");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => articles.filter((article) => {
    const matchesCategory = activeCategory === "All stories" || article.category === activeCategory;
    const searchText = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();
    return matchesCategory && searchText.includes(query.trim().toLowerCase());
  }), [activeCategory, query]);
  const featured = filtered.find((article) => article.featured);
  const cards = filtered.filter((article) => article.id !== featured?.id);

  return (
    <section className="stories-section" id="stories">
      <SectionHeading kicker="A collection of good things" title="The latest stories" note="Fresh perspectives, carefully gathered. New writing every week." />
      <div className="story-controls">
        <div className="category-tabs" role="group" aria-label="Filter stories by category">
          {categories.map((category) => <button key={category} className={activeCategory === category ? "category-tab active" : "category-tab"} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}>{category}</button>)}
        </div>
        <label className="search-box"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a story" aria-label="Search stories" /></label>
      </div>
      {featured && <FeaturedStory article={featured} />}
      {cards.length > 0 ? <div className="story-grid">{cards.map((article, index) => <StoryCard key={article.id} article={article} index={index} />)}</div> : !featured && <div className="empty-state"><span>✳</span><h3>No stories found just yet.</h3><p>Try a different search or category.</p></div>}
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-mark" aria-hidden="true">“</div>
      <div className="about-content"><span className="section-kicker">A note from the editor</span><h2>For the things that live in the <em>margins.</em></h2><p>Not everything meaningful demands the spotlight. Margins is an independent journal about the details, ideas, and everyday moments that make a life feel like your own.</p><a className="text-link" href="#newsletter">A little more about us <ArrowIcon /></a></div>
      <div className="about-doodle" aria-hidden="true">✳</div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
  }

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-flower" aria-hidden="true">✳</div>
      <div className="newsletter-copy"><span className="section-kicker">A letter, not another feed</span><h2>A little more <em>thought</em> in your inbox.</h2><p>One lovely note each Sunday. A good story, a thing worth keeping, and room to breathe. No noise, ever.</p></div>
      {subscribed ? <div className="success-message" role="status"><span>✓</span><div><strong>You’re on the list.</strong><p>Look out for a little note from us this Sunday.</p></div></div> : <form className="newsletter-form" onSubmit={handleSubmit} noValidate><label className="visually-hidden" htmlFor="newsletter-email">Your email address</label><div className="email-row"><input id="newsletter-email" type="email" autoComplete="email" placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? "email-error" : undefined} /><button type="submit" aria-label="Subscribe to the newsletter"><ArrowIcon /></button></div>{error ? <p className="form-error" id="email-error" role="alert">{error}</p> : <p className="form-note">Free, forever. Unsubscribe whenever.</p>}</form>}
    </section>
  );
}

function Footer() {
  return <footer className="site-footer"><div className="footer-top"><Brand /><p>Making a little room for better things.</p><div className="footer-links"><a href="#stories">Stories</a><a href="#about">About</a><a href="#newsletter">Newsletter</a></div></div><div className="footer-bottom"><span>© 2026 Margins Journal. Made with care.</span><span>Take it slow. You’re right on time.</span></div></footer>;
}

export default function BlogHome() {
  return <><Header /><main className="page-shell"><Hero /><Stories /><About /><Newsletter /></main><Footer /></>;
}
