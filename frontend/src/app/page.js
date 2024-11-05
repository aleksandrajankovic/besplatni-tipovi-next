import Filter from "../components/Filter";
import Home from "../modules/home";

export default async function Page() {
  try {
  
    const res = await fetch('http://localhost:5000/tip', { cache: 'no-store' });
    const data = await res.json();
  

    return (
      <div className="home-wrapper">
        <Filter tips={data} />
        <div>
          <Home fetchedTips={data} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Fetch error:", error);
    return <p>Error fetching data</p>;
  }
}
