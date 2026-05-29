import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = ({ savedCount, totalJobs }) => {
  const location = useLocation();

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-lg font-black tracking-tight text-slate-800 dark:text-white hover:opacity-90 transition-opacity flex items-center gap-1.5"
          >
            <span>Briefcase.ai</span>
            <span className="text-base">💼</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              to="/jobs"
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 ${
                location.pathname === "/jobs"
                  ? "bg-sky-50 dark:bg-sky-950/40 text-sky-500 dark:text-sky-400"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              Explore Openings{" "}
              <span
                className={`ml-1 text-[11px] px-1.5 py-0.5 rounded-md font-extrabold ${
                  location.pathname === "/jobs"
                    ? "bg-sky-500/10 text-sky-500"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                }`}
              >
                {totalJobs}
              </span>
            </Link>

            <Link
              to="/saved"
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 flex items-center gap-1.5 ${
                location.pathname === "/saved"
                  ? "bg-sky-50 dark:bg-sky-950/40 text-sky-500 dark:text-sky-400"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              Watchlist
              <span
                className={`text-[11px] font-black px-1.5 py-0.5 rounded-md transition-all duration-300 ${
                  savedCount > 0
                    ? "bg-rose-500 text-white animate-pulse"
                    : location.pathname === "/saved"
                      ? "bg-sky-500/10 text-sky-500"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                }`}
              >
                {savedCount}
              </span>
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 ${
                location.pathname === "/about"
                  ? "bg-sky-50 dark:bg-sky-950/40 text-sky-500 dark:text-sky-400"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              About
            </Link>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm active:scale-95 transition-all cursor-pointer shadow-sm"
            title="Toggle Light/Dark Workspace"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
