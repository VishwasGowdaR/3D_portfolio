import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

// keep Navbar/Footer as they are
import { Footer, Navbar } from "./components";

// Lazy-load pages (code-split)
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  // Use Vite's base as the router basename. This lets the app work at `/` (dev/Vercel)
  // and at a subpath like `/3D_portfolio/` (GitHub Pages) without code changes.
  const BASENAME = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

  return (
    <main className="bg-slate-300/20">
      <Router basename={BASENAME}>
        <Navbar />
        <Suspense fallback={<div style={{ padding: 20 }}>Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all: always push unknown routes back to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}
