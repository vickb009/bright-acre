import Image from "next/image";

export default function FAQLandowners() {
  return (
    <main style={{ padding: "60px" }}>
      {/* Hero Image */}
      <Image
        src="/images/faq/landowner-faq.jpg"
        alt="Frequently asked questions from landowners"
        width={1200}
        height={600}
        priority
      />

      <h1>Landowner FAQs</h1>

      <p>
        Find answers to common questions about leasing land for solar
        development and how Bright Acre supports landowners.
      </p>

      <h2>Common Questions</h2>

      <ul>
        <li>How does a solar land lease work?</li>
        <li>What type of land is suitable for solar projects?</li>
        <li>How long are typical lease terms?</li>
        <li>Can I continue using my land?</li>
      </ul>
    </main>
  );
}
