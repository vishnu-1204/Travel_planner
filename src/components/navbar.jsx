export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-30 w-[92%] max-w-7xl">
      <div className="flex items-center justify-between px-8 py-4
                      rounded-2xl bg-[#020617]/90 backdrop-blur-lg
                      border border-white/10
                      shadow-[0_10px_40px_rgba(34,197,94,0.15)]">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 "></span>
          <h1 className="text-xl font-bold tracking-wide text-white">
            Travel<span className="text-sky-400">Mate</span>
          </h1>
        </div>

        {/* Links */}
        <ul className="flex gap-10 text-sm font-medium">
          {["Home", "Group Tours", "Packages","India","Honeymoon","Contact",'About'].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer text-white/70
                         hover:text-white transition
                         after:absolute after:left-0 after:-bottom-1
                         after:h-[2px] after:w-0 after:bg-sky-400
                         hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
  className="px-6 py-2 rounded-full
             bg-sky-400 text-[#020617]
             font-semibold
             hover:bg-sky-400
             shadow-[0_0_20px_rgba(34,197,94,0.6)]
             transition
             cursor-pointer
             "
>
  Explore
</button>

      </div>
    </nav>
  );
}
