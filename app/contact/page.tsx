import Image from "next/image";

export default function Contact() {
  return (
    <main style={{ padding: "60px" }}>
      {/* Hero Image */}
      <Image
        src="/images/contact/contact-hero.jpg"
        alt="Contact Bright Acre"
        width={1200}
        height={600}
        priority
      />

      <h1>Contact Bright Acre</h1>

      <p>
        Have questions about leasing your land or partnering with us?
        Reach out to the Bright Acre team and we’ll be happy to help.
      </p>

      {/* Supporting Image */}
      <Image
        src="/images/contact/contact-support.jpg"
        alt="Bright Acre support team"
        width={1000}
        height={500}
        style={{ marginTop: "40px" }}
      />

      <h2>Get in Touch</h2>

      <p>
        Email us at:{" "}
        <a href="mailto:info@brightacre.com">
          info@brightacre.com
        </a>
      </p>
    </main>
  );
}
