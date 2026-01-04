import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import './styles/toursCategory.css'

function TourCategory({ tour }) {
  const navigate = useNavigate();

  return (
    <div
      className="category-card"
      onClick={() => navigate(`/tours/${tour.id}`)}
    >
      <img src={tour.image} alt={tour.title} />

      <div className="category-overlay">
        <h2>{tour.title}</h2>
        <span className="tour-badge">{tour.count} TOURS</span>
      </div>
    </div>
  );
}

export default TourCategory;