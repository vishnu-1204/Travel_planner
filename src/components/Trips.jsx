import trips from "../data/popular-package.json";

export default function Trips() {
  return (
    <section className="px-10 py-20 bg-[#0f172a]">

     {/* SECTION TITLE */}
      <h2 className="text-3xl font-bold text-white mb-12">
        Popular Packages
      </h2>

      <div className="grid grid-cols-2 gap-8 mb-8">
        {trips.slice(0, 2).map((cat) => (
          <CategoryCard key={cat.id} data={cat} height="h-[260px]" />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8">
        {trips.slice(2).map((cat) => (
          <CategoryCard key={cat.id} data={cat} height="h-[230px]" />
        ))}
      </div>
    </section>
  );
}

function CategoryCard({ data, height }) {
  return (
    <div
      className={`relative ${height} rounded-lg overflow-hidden cursor-pointer`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h3 className="text-white text-lg font-semibold leading-snug">
          {data.title}
        </h3>

        <span className="mt-3 px-4 py-1 text-xs font-bold bg-sky-400 text-black">
          {data.tours} TOURS
        </span>
      </div>
    </div>
  );
}
