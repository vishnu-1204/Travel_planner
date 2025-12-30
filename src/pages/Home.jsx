import PackageCard from "../components/PackageCard";
import packages from "../data/packages.json";
import "./Home.css";

function Home() {
  return (
    <section className="packages-section">
      <h2>Popular Packages</h2>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            image={pkg.image}
            title={pkg.title}
            duration={pkg.duration}
            price={pkg.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
