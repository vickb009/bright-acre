export default function LandForm() {
  return (
    <form>
      <label>Do you have 40+ acres available?</label>
      <select>
        <option value="">Select</option>
        <option>Yes</option>
        <option>No</option>
      </select>

      <label>Total Clear Acreage (numbers only)</label>
      <input type="number" placeholder="e.g. 120" />

      <label>Property Location</label>
      <input type="text" placeholder="City, State" />

      <label>Email</label>
      <input type="email" />

      <button type="submit">Submit Property</button>
    </form>
  );
}
