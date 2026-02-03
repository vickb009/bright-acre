"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav>
      {/* Logo + Company Name */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Link href="/">
          <Image
            src="/images/logo/bright-acre-logo.png"
            alt="Bright Acre Logo"
            width={80}
            height={80}
            style={{ objectFit: "contain" }}
          />
        </Link>
        <Link href="/">
          <span>Bright Acre</span>
        </Link>
      </div>

      {/* Desktop Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/submit-land">Submit Your Land</Link>
        <Link href="/faq-landowners">FAQ Landowners</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/developers">Developers</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={toggleMenu}
        style={{
          display: "none",
          fontSize: "28px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        ☰
      </button>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: ${menuOpen ? "block" : "none"};
            position: absolute;
            top: var(--navbar-height);
            right: 0;
            background: var(--background);
            width: 100%;
            padding: 10px 0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          }

          .nav-links a {
            display: block;
            padding: 10px 20px;
          }

          button.hamburger {
            display: block;
          }
        }

        @media (min-width: 769px) {
          .nav-links {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}
