import Image from "next/image";

export default function Articles() {
  return (
    <main style={{ padding: "60px" }}>
      {/* Hero Image */}
      <Image
        src="/images/articles/articles-hero.jpg"
        alt="Solar energy insights and resources"
        width={1200}
        height={600}
        priority
      />

      <h1>Articles & Resources</h1>

      <p>
        Explore insights on solar land leasing, renewable energy trends,
        and guidance for landowners and developers.
      </p>

      {/* Featured Article Image */}
      <Image
        src="/images/articles/solar-insights.jpg"
        alt="Solar industry trends"
        width={1000}
        height={500}
        style={{ marginTop: "40px" }}
      />

      <h2>Featured Topics</h2>

      <ul>
        <li>How solar land leases work</li>
        <li>What makes land suitable for solar projects</li>
        <li>Renewable energy market updates</li>
        <li>Landowner and developer considerations</li>
      </ul>
    </main>
  );
}
