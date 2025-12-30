import { useEffect, useRef, useState } from "react";
import "./styles/PackageCard.css";

function PackageCard({ image, title, duration, price }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`package-card ${isVisible ? "show" : ""}`}
    >
      <img src={image} alt={title} />

      <div className="card-content">
        <h3>{title}</h3>
        <p>{duration}</p>

        <div className="card-footer">
          <span className="price">{price}</span>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
