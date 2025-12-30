import { useEffect, useRef, useState } from "react";
import testimonials from "../data/testimonials.json";
import "./styles/testimonials.css";

function Testimonials() {

  const prevSlide = () => {
  if (index > 0) setIndex(index - 1);
};

const nextSlide = () => {
  if (index < testimonials.length - 1) setIndex(index + 1);
};

  const sliderRef = useRef(null);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const isDragging = useRef(false);

  const [index, setIndex] = useState(0);

  const cardWidth = 330; // card width + gap

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging.current) {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Apply translate
  useEffect(() => {
    sliderRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
  }, [index]);

  // Start drag
  const startDrag = (x) => {
    isDragging.current = true;
    startX.current = x;
    currentTranslate.current = index * cardWidth;
    sliderRef.current.style.transition = "none";
  };

  // During drag
  const onDrag = (x) => {
    if (!isDragging.current) return;
    const diff = x - startX.current;
    sliderRef.current.style.transform = `translateX(-${
      currentTranslate.current - diff
    }px)`;
  };

  // End drag
  const endDrag = (x) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const diff = x - startX.current;
    sliderRef.current.style.transition = "transform 0.6s ease";

    if (diff > 80 && index > 0) {
      setIndex(index - 1);
    } else if (diff < -80 && index < testimonials.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(index);
    }
  };

  return (
   <section className="testimonial-section">
  <div className="slider-container">

    {/* LEFT ARROW */}
    <button
      className="arrow left"
      onClick={prevSlide}
      disabled={index === 0}
    >
      &lt;
    </button>

    <div className="slider-wrapper">
      <div
        className="slider-track"
        ref={sliderRef}
        onMouseDown={(e) => startDrag(e.clientX)}
        onMouseMove={(e) => onDrag(e.clientX)}
        onMouseUp={(e) => endDrag(e.clientX)}
        onMouseLeave={(e) => endDrag(e.clientX)}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchMove={(e) => onDrag(e.touches[0].clientX)}
        onTouchEnd={(e) => endDrag(e.changedTouches[0].clientX)}
      >
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <img src={t.image} alt={t.name} />
            <div className="overlay">
              <p className="quote">“{t.quote}”</p>
              <h4>{t.name}</h4>
              <span>{t.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT ARROW */}
    <button
      className="arrow right"
      onClick={nextSlide}
      disabled={index === testimonials.length - 1}
    >
      &gt;
    </button>

  </div>
</section>

  );
}

export default Testimonials;
