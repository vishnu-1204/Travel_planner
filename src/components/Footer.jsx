export default function Footer() {
  return (
    <footer className="bg-black text-white/80 px-10 pt-20 pb-10">

      {/* TOP SECTION */}
      <div className="grid grid-cols-3 gap-16 mb-16">

        {/* CORPORATE OFFICE */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">
            Corporate Office
          </h3>
          <p className="text-sm leading-relaxed">
            TravelMate Pvt LTD,<br />
            Novel Tech Park,<br />
            Opposite to Mall,<br />
            MG Road, Bangalore – 560042<br />
            Karnataka, India.
          </p>
        </div>

        {/* HEAD OFFICE */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">
            Head Office
          </h3>
          <p className="text-sm leading-relaxed">
            TravelMate Pvt LTD,<br />
            No.1, Gemini Parsn,<br />
            Kodambakkam High Road,<br />
            Nungambakkam, Chennai – 600006<br />
            Tamil Nadu, India.
          </p>
        </div>

        {/* BRANCHES */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">
            Our Branches
          </h3>
          <div className="grid grid-cols-2 gap-x-10 text-sm">
            <ul className="space-y-2">
              <li>Mumbai</li>
              <li>Hyderabad</li>
              <li>Bangalore</li>
              <li>Chennai</li>
              <li>Coimbatore</li>
              <li>Erode</li>
              <li>Madurai</li>
            </ul>
            <ul className="space-y-2">
              <li>Trichy</li>
              <li>Salem</li>
              <li>Kochi</li>
              <li>Vellore</li>
              <li>Pondicherry</li>
              <li>Nagercoil</li>
              <li>Kanyakumari</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CONTACT + SOCIAL */}
      <div className="grid grid-cols-3 gap-16 border-t border-white/10 pt-10">

        {/* CALL */}
        <div>
          <p className="text-sm mb-2 text-white/60">Call Us</p>
          <p className="text-xl font-semibold text-white">
            +91 9940882200
          </p>
        </div>

        {/* EMAIL */}
        <div>
          <p className="text-sm mb-2 text-white/60">Email Us</p>
          <p className="text-lg text-white">
            mail@travelmate.in
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div>
          <p className="text-sm mb-4 text-white/60">Follow Us</p>
          <div className="flex gap-5">
  {/* Facebook */}
  <a href="#" aria-label="Facebook">
    <svg
      className="w-5 h-5 fill-white hover:fill-white transition cursor-pointer"
      viewBox="0 0 24 24"
    >
      <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a href="#" aria-label="Instagram">
    <svg
      className="w-5 h-5 fill-white hover:fill-white transition cursor-pointer"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.318.975.975 1.256 2.242 1.318 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.343 2.633-1.318 3.608-.975.975-2.242 1.256-3.608 1.318-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.343-3.608-1.318-.975-.975-1.256-2.242-1.318-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.343-2.633 1.318-3.608.975-.975 2.242-1.256 3.608-1.318C8.416 2.175 8.796 2.163 12 2.163zm0 3.675a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
    </svg>
  </a>

  {/* LinkedIn */}
  <a href="#" aria-label="LinkedIn">
    <svg
      className="w-5 h-5 fill-white hover:fill-white transition cursor-pointer"
      viewBox="0 0 24 24"
    >
      <path d="M22.23 0H1.77C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.77 24h20.46C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.433c-1.14 0-2.06-.927-2.06-2.07 0-1.143.92-2.07 2.06-2.07s2.06.927 2.06 2.07c0 1.143-.92 2.07-2.06 2.07zM20.452 20.452h-3.56v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.942v5.664h-3.56V9h3.417v1.561h.047c.476-.9 1.636-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.456v6.285z"/>
    </svg>
  </a>

  {/* YouTube */}
  <a href="#" aria-label="YouTube">
    <svg
      className="w-5 h-5 fill-white hover:fill-white transition cursor-pointer"
      viewBox="0 0 24 24"
    >
      <path d="M23.498 6.186a2.958 2.958 0 0 0-2.08-2.094C19.632 3.545 12 3.545 12 3.545s-7.632 0-9.418.547A2.958 2.958 0 0 0 .502 6.186C0 7.977 0 12 0 12s0 4.023.502 5.814a2.958 2.958 0 0 0 2.08 2.094C4.368 20.455 12 20.455 12 20.455s7.632 0 9.418-.547a2.958 2.958 0 0 0 2.08-2.094C24 16.023 24 12 24 12s0-4.023-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  </a>
</div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm text-white/40 mt-12">
        © 2026 TravelMate Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}

/* SVG ICON WRAPPER */
function SocialIcon({ children }) {
  return (
    <svg
      className="w-5 h-5 fill-white hover:fill-white cursor-pointer transition"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}

