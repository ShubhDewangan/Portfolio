import React from "react";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const slowScrollTo = (id, duration = 500) => {
    const target = document.getElementById(id);
    if (!target) return;

    const start = window.pageYOffset;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;
    let startTime = null;

    const easeInOut = (t) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, start + distance * easeInOut(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <nav className="nv fixed left-1/2 top-2 md:top-5 -translate-x-1/2 md:px-8 md:py-3 hover:px-20 rounded-[7px] flex items-center justify-center text-gray-950 md:gap-10 z-50">
      <button
        onClick={() => {
          slowScrollTo("home");
          navigate("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          slowScrollTo("projects");
          navigate("/projects");
        }}
      >
        Projects
      </button>
      <button
        onClick={() => {
          slowScrollTo("contact");
          navigate("/contact");
        }}
      >
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
