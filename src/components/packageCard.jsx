import { useEffect, useRef, useState } from "react";
import "./styles/PackageCard.css";

function PackageCard({ data }) {
  return (
    <div className="package-card">
      <img src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
      <p>{data.days}</p>
      <span>{data.price}</span>
    </div>
  );
}

export default PackageCard;
