import tours from "../data/tours.json";
import TourCategory from "../components/toursCategory.jsx";
import './Home.css'

function Home() {
  return (
    <>
      {/* SECTION TITLE */}
     <section className="popular-wrapper">
  <div className="popular-section">
    <h1>Popular Tour Packages</h1>
    <p>Handpicked destinations loved by travelers</p>
  </div>

  <div className="category-grid">
    {tours.map((tour) => (
      <TourCategory key={tour.id} tour={tour} />
    ))}
  </div>
</section>


    </>
  );
}

export default Home;

