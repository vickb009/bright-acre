import Image from "next/image";

export default function Developers() {
  return (
    <main style={{ padding: "60px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Hero Image */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Image
          src="/images/developers/developer-hero.jpg"
          alt="Utility scale solar development"
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

      <h1>For Solar Developers</h1>
      <p>
        Bright Acre helps solar developers identify land opportunities that
        align with grid access, zoning, and project scale requirements.
      </p>

      {/* Supporting Image */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Image
          src="/images/developers/solar-development.jpg"
          alt="Solar project planning and development"
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

      <h2>How We Support Your Projects</h2>
      <ul>
        <li>Access to land parcels ranging from 20 to 200+ acres</li>
        <li>Pre-screened locations with development potential</li>
        <li>Direct connection with landowners</li>
        <li>Faster site identification and evaluation</li>
      </ul>
    </main>
  );
}
