import Image from "next/image";

export default function Articles() {
  return (
    <main style={{ padding: "60px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Hero Image */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Image
          src="/images/articles/articles-hero.jpg"
          alt="Solar energy insights and resources"
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

      <h1>Articles & Resources</h1>
      <p>
        Explore insights on solar land leasing, renewable energy trends,
        and guidance for landowners and developers.
      </p>

      {/* Featured Article Image */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Image
          src="/images/articles/solar-insights.jpg"
          alt="Solar industry trends"
          width={1000}
          height={500}
          style={{
            width: "100%",
            maxWidth: "1000px",
            height: "auto",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />
      </div>

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
