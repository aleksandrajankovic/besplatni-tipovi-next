import Filter from "../components/Filter";
import Home from "../modules/Home";

export default async function Page() {
  try {
    const res = await fetch("http://localhost:5000/tip", { cache: "no-store" });
    const data = await res.json();

    return (
     
        <Filter tips={data} />
     
    );
  } catch (error) {
    console.error("Fetch error:", error);
    return <p>Error fetching data</p>;
  }
}
