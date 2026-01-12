export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center px-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0b1220]/70"></div>

      <div className="relative z-10 max-w-xl mt-24 text-white">
        <p className="text-xs tracking-widest text-sky-400 ">
          EXPLORE • ADVENTURE • DISCOVER
        </p>

        <h2 className="text-5xl font-bold leading-tight mt-4">
          Discover places <br /> beyond imagination
        </h2>

        <p className="mt-6 text-white/80">
         Every journey with <span className="text-sky-400  font-semibold">TravelMate </span> 
         is designed to give you memories that last far beyond the trip itself.
        </p>

        <button className="mt-8 px-10 py-3 bg-sky-400 
                           text-[#020617] rounded-full
                           font-semibold hover:bg-sky-400
                           cursor-pointer
                           ">
          Start Exploring
        </button>
      </div>
    </section>
  );
}
