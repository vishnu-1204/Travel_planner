import { useEffect, useRef, useState } from "react";
import testimonials from "../data/testimonials.json";

export default function Testimonials() {
  const cardWidth = 240;
  const gap = 24;
  const step = cardWidth + gap;

  // duplicate data for seamless loop
  const data = [...testimonials, ...testimonials];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const sliderRef = useRef(null);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // silent reset for infinite loop
  useEffect(() => {
    if (index === testimonials.length) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 2000); // match transition duration
    } else {
      setAnimate(true);
    }
  }, [index, testimonials.length]);

  return (
    <section className="px-10 py-20 bg-black text-white relative overflow-hidden">
      <h2 className="text-3xl font-heading mb-12">
        Our Happy Clients
      </h2>

      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className={`flex gap-6 ${
            animate
              ? "transition-transform duration-[1600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              : ""
          }`}
          style={{
            transform: `translateX(-${index * step}px)`,
          }}
        >
          {data.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="min-w-[240px] h-[360px] rounded-lg overflow-hidden relative"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              <div className="absolute bottom-4 px-4">
                <p className="text-sm italic text-white/90">
                  “{item.quote}”
                </p>

                <p className="mt-3 text-yellow-400 font-semibold">
                  {item.name}
                </p>
                <p className="text-white/60 text-xs">
                  {item.place}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
