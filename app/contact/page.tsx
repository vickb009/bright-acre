import Image from "next/image";

export default function Contact() {
  return (
    <main style={{ padding: "60px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Hero Image */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Image
          src="/images/contact/contact-hero.jpg"
          alt="Contact Bright Acre"
          width={1200}
          height={600}
          style={{
            width: "100%",
            maxWidth: "1200px",
            height: "auto",
            objectFit: "cover",
            borderRadius: "8px"
          }}
          priority
        />
      </div>

      <h1>Contact Bright Acre</h1>
      <p>
        Have questions about leasing your land or partnering with us? Reach out
        to the Bright Acre team and we’ll be happy to help.
      </p>

      {/* Supporting Image */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Image
          src="/images/contact/contact-support.jpg"
          alt="Bright Acre support team"
          width={100}
          height={100}
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            borderRadius: "50%",
            cursor: "pointer"
          }}
        />
      </div>

      <h2>Get in Touch</h2>
      <p>
        Email us at:{" "}
        <a href="mailto:info@brightacre.com">info@brightacre.com</a>
      </p>
    </main>
  );
}
