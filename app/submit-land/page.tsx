import LandForm from "@/components/LandForm";

export default function SubmitLand() {
  return (
    <main style={{ padding: "60px" }}>
      <h1>Submit Your Property</h1>
      <p>
        Share your land information, and we’ll evaluate its suitability for solar—no obligation.
      </p>
      <LandForm />
    </main>
  );
}
