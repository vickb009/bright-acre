import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "16px 32px",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #e5e7eb"
      }}
    >
      {/* Logo + Company Name (always visible on every page) */}
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
          color: "#000"
        }}
      >
        <Image
          src="/images/logo/bright-acre-logo.png"
          alt="Bright Acre"
          width={42}
          height={42}
          priority
        />
        <strong style={{ fontSize: "20px" }}>Bright Acre</strong>
      </Link>

      {/* Navigation */}
      <div>
        <Link href="/">Home</Link>{" | "}
        <Link href="/submit-land">Submit Your Land</Link>{" | "}
        <Link href="/faq-landowners">FAQ Landowners</Link>{" | "}
        <Link href="/articles">Articles</Link>{" | "}
        <Link href="/developers">Developers</Link>{" | "}
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
