"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav>
      {/* Logo + Company Name */}
      <div className="logo-name">
        <Link href="/">
          <Image
            src="/images/logo/bright-acre-logo.png"
            alt="Bright Acre Logo"
            width={60}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </Link>
        <Link href="/">
          <span>Bright Acre</span>
        </Link>
      </div>

      {/* Hamburger Menu Button (mobile only) */}
      <button className="hamburger" onClick={toggleMenu}>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
      </button>

      {/* Navbar Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/submit-land" onClick={() => setMenuOpen(false)}>Submit Your Land</Link>
        <Link href="/faq-landowners" onClick={() => setMenuOpen(false)}>FAQ Landowners</Link>
        <Link href="/articles" onClick={() => setMenuOpen(false)}>Articles</Link>
        <Link href="/developers" onClick={() => setMenuOpen(false)}>Developers</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}
