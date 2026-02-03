import LandForm from "@/components/LandForm";

export default function SubmitLand() {
  return (
    <main style={{ padding: "60px" }}>
      <h1>Submit Your Property</h1>
      <p>
        Share your land details and our team will review its potential
        for solar development.
      </p>
      <LandForm />
    </main>
  );
}
