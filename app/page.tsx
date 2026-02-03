import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <Image 
        src="/images/Home/home-hero.jpg" 
        alt="Home Hero" 
        width={1200} 
        height={600} 
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />

      <h1>Unlock the Value of Your Land with Bright Acre</h1>

      <p>
        Bright Acre connects landowners with renewable energy developers
        seeking suitable land for long-term solar projects.
      </p>

      <h2>Why consider leasing your land for solar?</h2>

      <ul>
        <li>Reliable long-term income</li>
        <li>No development costs for landowners</li>
        <li>Land remains yours</li>
      </ul>

      <p>
        Solar projects typically utilize land parcels ranging from
        <strong> 20 to 200 acres</strong>, depending on location and grid access.
      </p>
    </main>
  );
}
