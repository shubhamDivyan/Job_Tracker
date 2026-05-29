import React from "react";
import { Link } from "react-router-dom";

const Home = ({ jobsCount }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 md:py-24 space-y-8 animate-fade-in">
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Track Your Next <br />
          <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Software Engineering
          </span>{" "}
          Job
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Explore production-level opportunities, organize bookmarks
          efficiently, and map out your MERN developer career seamlessly.
        </p>
      </div>

      <div>
        <Link
          to="/jobs"
          className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-xl text-white bg-sky-500 hover:bg-sky-600 shadow-lg hover:shadow-sky-500/20 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Explore Live Openings
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mt-12 pt-12 border-t border-slate-200 dark:border-slate-800">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-3xl font-bold text-sky-500">
            {jobsCount || "50"}
          </div>
          <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
            Available Openings Indexed
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-3xl font-bold text-emerald-500">Fast Track</div>
          <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
            Tailwind CSS v4 Engine
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
