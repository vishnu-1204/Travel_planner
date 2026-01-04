import { useParams } from "react-router-dom";
import tours from "../data/tours.json";
import PackageCard from "./components/PackageCard";

function Tours() {
  const { id } = useParams();
  const selectedTour = tours.find(t => t.id === id);

  return (
    <div style={{ padding: "60px 8%" }}>
      <h1>{selectedTour.title}</h1>

      <div className="package-grid">
        {selectedTour.packages.map(p => (
          <PackageCard key={p.pid} data={p} />
        ))}
      </div>
    </div>
  );
}

export default Tours;
