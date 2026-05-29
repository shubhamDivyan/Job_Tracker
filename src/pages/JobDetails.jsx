import React from "react";
import { Link, useParams } from "react-router-dom";

export const JobDetails = ({ jobs, onSave, savedJobs }) => {
  const { itemId } = useParams();

  if (!jobs || jobs.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-lg font-semibold text-slate-500 animate-pulse">
          Loading job specifications...
        </div>
      </div>
    );
  }

  const job = jobs.find((item) => item.id === itemId);

  if (!job) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-2xl font-bold text-rose-500">⚠️ Job Not Found</h2>
        <p className="text-slate-500 dark:text-slate-400">
          The job ID you are looking for does not exist or has been archived.
        </p>
        <Link
          to="/jobs"
          className="inline-block px-5 py-2.5 bg-sky-500 text-white rounded-xl text-sm font-bold shadow-md hover:bg-sky-600 transition-all cursor-pointer"
        >
          Back to Live Feed
        </Link>
      </div>
    );
  }

  const isAlreadySaved =
    savedJobs && savedJobs.some((item) => item.id === job.id);

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-6 animate-fade-in">
      <Link
        to="/jobs"
        className="inline-flex items-center text-sm font-bold text-sky-500 hover:text-sky-600 transition-colors group"
      >
        <svg
          className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Live Openings
      </Link>

      <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xl shadow-slate-100/40 dark:shadow-none space-y-6 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl"></div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/60 pb-6 relative z-10">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
              {job.company}
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white tracking-tight leading-tight">
              {job.title}
            </h1>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs font-bold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center gap-1">
                📍 {job.location}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border border-sky-100/40 dark:border-sky-900/30">
                💻 {job.category}
              </span>
              <span
                className={`text-xs font-bold px-3 py-1 rounded-xl ${
                  job.level === "Advanced"
                    ? "bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400"
                    : job.level === "Intermediate"
                      ? "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400"
                      : "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400"
                }`}
              >
                🔥 {job.level}
              </span>
            </div>
          </div>

          <div className="text-xl sm:text-2xl font-black text-slate-700 dark:text-slate-200 self-start sm:self-center bg-slate-50 dark:bg-slate-950/60 px-4 py-2.5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
            ₹{(Number(job.salary) / 100000).toFixed(1)} LPA
          </div>
        </div>

        <div className="space-y-4 relative z-10">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white tracking-tight">
            Role Specification & Expectations
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base whitespace-pre-line">
            {job.description}
          </p>

          <div className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-950/40 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/60">
            💡{" "}
            <strong className="text-slate-700 dark:text-slate-300">
              Important Note:
            </strong>{" "}
            This opening is verified directly by the Briefcase.ai engine logs.
            Make sure to tailor your MERN portfolio projects and update your
            GitHub summary before initiating the application protocols.
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex justify-end relative z-10">
          <button
            onClick={() => onSave(job)}
            disabled={isAlreadySaved}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 transform active:scale-95 cursor-pointer shadow-md ${
              isAlreadySaved
                ? "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed shadow-none border border-slate-200/40 dark:border-slate-700/30"
                : "bg-sky-500 hover:bg-sky-600 text-white shadow-sky-500/10 hover:shadow-sky-500/20 hover:-translate-y-0.5"
            }`}
          >
            {isAlreadySaved ? "✓ Saved to Watchlist" : "Bookmark This Role"}
          </button>
        </div>
      </div>
    </div>
  );
};
