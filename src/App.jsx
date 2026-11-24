import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { SITE } from "./config.js";
import * as P from "./pages.jsx";

function ScrollTop() { const { pathname } = useLocation(); useEffect(() => window.scrollTo(0, 0), [pathname]); return null; }

export default function App() {
  return (
    <>
      <ScrollTop />
      <header className="top">
        <Link to="/" className="logo">{SITE.name}</Link>
        <nav aria-label="Main"><NavLink to="/tools">Tools</NavLink><NavLink to="/guides">Guides</NavLink></nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<P.Home />} />
          <Route path="/tools" element={<P.ToolsIndex />} />
          <Route path="/tools/:slug" element={<P.Tool />} />
          <Route path="/guides" element={<P.Guides />} />
          <Route path="/guides/:slug" element={<P.Guide />} />
          <Route path="/methodology" element={<P.Methodology />} />
          <Route path="/about" element={<P.About />} />
          <Route path="/contact" element={<P.Contact />} />
          <Route path="/privacy" element={<P.Privacy />} />
          <Route path="/terms" element={<P.Terms />} />
          <Route path="*" element={<section className="page"><h1>Page not found</h1><Link to="/">Back to home</Link></section>} />
        </Routes>
      </main>
      <CookieNotice />
      <footer className="foot">
        <nav aria-label="Footer"><Link to="/methodology">Methodology</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></nav>
        <p>© {new Date().getFullYear()} {SITE.name}. Free browser tools for learning and making.</p>
      </footer>
    </>
  );
}

function CookieNotice() {
 const [choice,setChoice]=useState(null);
 useEffect(()=>{setChoice(localStorage.getItem('invictus-consent'))},[]);
 if(choice)return null;
 return <aside className="consent"><p>Advertising cookies stay off unless you choose to allow them.</p><button onClick={()=>{localStorage.setItem('invictus-consent','accepted');setChoice('accepted')}}>Allow advertising cookies</button><button onClick={()=>{localStorage.setItem('invictus-consent','rejected');setChoice('rejected')}}>Continue without</button></aside>;
}
