import { useEffect, useState } from "react";
import images from "../data/Hero.json";

const words = ["extraordinary", "Adventure", "Discover","Life Changing"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  // AUTO SLIDER + TEXT CHANGE (EVERY 3s)
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setAnimate(true);
      }, 600);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* IMAGE SLIDES */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Hero slide"
          className={`absolute inset-0 w-full h-full object-cover
            transition-opacity duration-[1800ms] ease-in-out
            ${i === index ? "opacity-100" : "opacity-0"}
            pointer-events-none`}
        />
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none"></div>

      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">

        {/* SMOOTH JUMPING WORD */}
      <span
          key={index}
          className="text-sky-400 text-4xl font-script animate-text"
        >
          {words[index]}
      </span>

      <h1 className="text-white text-5xl md:text-6xl font-heading tracking-wide">
          <span className="text-sky-400">travel</span>, worldclass
      </h1>

      <p className="mt-4 max-w-2xl text-white/80 text-sm md:text-base font-body">
        The real voyage of discovery consists not in seeking new landscapes,
        but in having new eyes.
      </p>

      </div>

      {/* LEFT ARROW */}
      <button
        onClick={() =>
          setIndex((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30
                   w-12 h-12 flex items-center justify-center
                   bg-black/50 text-white text-2xl
                   hover:bg-black/70 transition"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() =>
          setIndex((prev) => (prev + 1) % images.length)
        }
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30
                   w-12 h-12 flex items-center justify-center
                   bg-black/50 text-white text-2xl
                   hover:bg-black/70 transition"
      >
        ›
      </button>
    </section>
  );
}
